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
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all duration-150 active:scale-95"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Edit
      </button>
      {renderDialogDrawer()}
    </>
  );
};

export default UpdateAction;
