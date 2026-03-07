'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { handleSubmit } from './handleSubmit';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useToast } from '@/components/ui/use-toast';

function PublishForm({ className, code, closeState }: any) {
  const { toast } = useToast();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [published, setPublished] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [form, setForm] = useState({
    title: '',
    author: '',
  });

  const sendForm = async (formData: FormData) => {
    const titleValue = formData?.get('title');
    if (typeof titleValue === 'string') {
      formData.set('title', titleValue.trim());
    }
    const authorValue = formData?.get('author');
    if (typeof authorValue === 'string') {
      formData.set('author', authorValue.trim());
    }
    formData.set('script', code.trim());

    if (
      formData.get('title') === '' ||
      formData.get('author') === '' ||
      formData.get('script') === ''
    ) {
      return;
    }

    try {
      const response = await handleSubmit(formData);
      if (response.status === 'success') {
        setPublished(true);
        setTimeout(() => {
          closeState(false);
          setPublished(false);
          setSubmitDisabled(false);
        }, 1000);
      } else {
        setFailed(true);
        setTimeout(() => {
          setFailed(false);
          setSubmitDisabled(false);
        }, 3000);
      }
    } catch (err) {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
        setSubmitDisabled(false);
      }, 3000);
    }
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    const sanitizedValue = value.replace(/\s{2,}/g, ' ');

    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleButtonClick = (e: any) => {
    if (
      !(form.title?.trim() === '') &&
      !(form.author?.trim() === '') &&
      !(code.trim() === '')
    ) {
      setTimeout(() => {
        setSubmitDisabled(true);
        setFailed(false);
      }, 1);
    }
  };

  return (
    <form className={cn('grid items-start gap-4', className)} action={sendForm}>
      <div className="grid gap-2">
        <Label htmlFor="title" className="text-slate-300">
          Script Title
        </Label>
        <Input
          id="title"
          placeholder="Potion Swap"
          name="title"
          onChange={handleFormChange}
          value={form.title}
          autoFocus={false}
          className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="author" className="text-slate-300">
          Author
        </Label>
        <Input
          id="author"
          placeholder="ItziSpyder"
          name="author"
          onChange={handleFormChange}
          value={form.author}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.currentTarget.blur();
              const form = e.currentTarget.form;
              if (form) {
                const submitButton = form.querySelector(
                  'button[type="submit"]',
                ) as HTMLButtonElement;
                submitButton?.click();
              }
            }
          }}
          className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>
      <input name="script" type="hidden" value={code} />
      <p className="text-xs text-slate-400">
        We suggest you to also add{' '}
        <span className="px-2 py-1 font-mono bg-slate-950 text-emerald-400 rounded">
          <span className="text-slate-500">&#47;&#47;</span>{' '}
          <span className="text-slate-400">@</span>
          <span className="text-emerald-400">your-name</span>
        </span>{' '}
        at first line to represent your name.
      </p>
      <Button
        type="submit"
        disabled={submitDisabled}
        onClick={handleButtonClick}
        className={`transition-colors ${
          published
            ? 'bg-green-600 hover:bg-green-500'
            : failed
              ? 'bg-red-600 hover:bg-red-500'
              : 'bg-emerald-700 hover:bg-emerald-600'
        }`}
      >
        {submitDisabled && !published && !failed && (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        )}
        {published ? (
          <>
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Published
          </>
        ) : failed ? (
          <>
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Failed
          </>
        ) : (
          'Publish'
        )}
      </Button>
    </form>
  );
}

type PublishProps = {
  onOpen: any;
  code: string;
  disabled: boolean;
};

const Publish = ({ onOpen, code, disabled }: PublishProps) => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleOpen = (open: boolean) => {
    setOpen(open);
    onOpen();
  };

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    if (desktopQuery.matches) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    desktopQuery.addEventListener('change', (e: any) => {
      if (e.matches) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    });
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpen}>
        <DialogTrigger asChild>
          <button
            disabled={disabled}
            className="bg-emerald-600 hover:bg-emerald-500 font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border border-emerald-700 shadow-[inset_0_1px_0_0_rgba(52,211,153,0.3)]"
          >
            Publish
          </button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] bg-slate-900 border-slate-800"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-white">
              Publish script to archive
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Give your script a title and set your author name to publish!
            </DialogDescription>
          </DialogHeader>
          <PublishForm closeState={setOpen} code={code} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button
          disabled={disabled}
          className="bg-emerald-600 hover:bg-emerald-500 font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border border-emerald-700 shadow-[inset_0_1px_0_0_rgba(52,211,153,0.3)]"
        >
          Publish
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-slate-900 border-slate-800">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-white">
            Publish script to archive
          </DrawerTitle>
          <DrawerDescription className="text-slate-400">
            Give your script a title and set your author name to publish!
          </DrawerDescription>
        </DrawerHeader>
        <PublishForm closeState={setOpen} code={code} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Publish;
