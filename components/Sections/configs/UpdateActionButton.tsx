'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useSession } from 'next-auth/react';
import { updateConfig } from './UpdateConfigAction';
import { deleteConfig } from './DeleteServerAction';
import { type Config } from './ConfigCard';

const UpdateAction = ({ config }: { config: Config }) => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [formData, setFormData] = useState({
    title: config.title,
    description: config.description,
    categories: config.categories,
    userId: config.user.id,
    config: config.config,
  });

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    setIsDesktop(desktopQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    desktopQuery.addEventListener('change', handleMediaChange);

    return () => {
      desktopQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = formData.title.trim();
    const trimmedDescription = formData.description.trim();
    const trimmedCategories = formData.categories
      .map((cat: string) => cat.trim())
      .filter((cat: string) => cat !== '');

    if (!trimmedTitle || !trimmedDescription) {
      toast({
        title: 'Required Fields Missing',
        description: 'Title and Description cannot be empty.',
        variant: 'destructive',
      });
      return;
    }

    const updatedData = {
      ...formData,
      title: trimmedTitle,
      description: trimmedDescription,
      categories: trimmedCategories,
    };

    try {
      const success = await updateConfig(config.id, updatedData);
      if (success) {
        toast({
          title: 'Successfully updated config!',
          description: 'The config has been updated successfully.',
          variant: 'passive',
        });
      } else {
        toast({
          title: 'Failed to update config',
          description:
            'There was an error while updating your config. Please try again!',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while updating the config.',
        variant: 'destructive',
      });
    } finally {
      setOpen(false);
    }
  };

  const renderForm = () => (
    <form
      className="grid items-start gap-4 max-md:px-4"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">
          Title <span className="text-red-500">*</span>
        </Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">
          Description <span className="text-red-500">*</span>
        </Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleFormChange}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="categories">Categories (comma separated)</Label>
        <Input
          id="categories"
          name="categories"
          value={formData.categories}
          onChange={(e) =>
            setFormData({
              ...formData,
              categories: e.target.value
                .split(',')
                .map((cat: string) => cat.trim()),
            })
          }
        />
      </div>
      <Button type="submit">Submit</Button>
      <Button
        variant="destructive"
        onClick={async (e) => {
          e.stopPropagation();
          e.preventDefault();
          try {
            setOpen(false);
            const success = await deleteConfig(config.id);
            if (success) {
              toast({
                title: 'Successfully deleted config!',
                description: 'The config has been deleted successfully.',
                variant: 'passive',
              });
              setOpen(false);
            } else {
              toast({
                title: 'Failed to delete config',
                description:
                  'There was an error while deleting your config. Please try again!',
                variant: 'destructive',
              });
            }
          } catch (error) {
            toast({
              title: 'Error',
              description: 'An error occurred while deleting the config.',
              variant: 'destructive',
            });
          }
        }}
      >
        Delete
      </Button>
    </form>
  );

  const renderDialogDrawer = () => {
    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="hidden">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Config Details</DialogTitle>
              <DialogDescription>
                Update the details of your config!
              </DialogDescription>
            </DialogHeader>
            {renderForm()}
          </DialogContent>
        </Dialog>
      );
    }
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="hidden">Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Update Config Details</DrawerTitle>
            <DrawerDescription>
              Update the details of your config!
            </DrawerDescription>
          </DrawerHeader>
          {renderForm()}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setOpen(true)}
        className="w-full m-0 rounded-tl-none rounded-tr-none hover:opacity-80 transition-all duration-100 bg-[#4482ef] text-white hover:bg-[#4471efe6] rounded-br-none rounded-bl-none"
      >
        Update
      </Button>
      {renderDialogDrawer()}
    </>
  );
};

export default UpdateAction;
