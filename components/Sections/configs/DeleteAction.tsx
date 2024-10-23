import { Button } from '@/components/ui/button';
import { deleteConfig } from './DeleteServerAction';

const DeleteAction = ({ configId }: { configId: number }) => {
  return (
    <>
      <Button
        variant="destructive"
        onClick={() => deleteConfig(configId)}
        className="w-full m-0 rounded-tl-none rounded-br-none rounded-tr-none hover:opacity-80 transition-all duration-100"
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteAction;
