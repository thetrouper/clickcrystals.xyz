import { useSession } from 'next-auth/react';
import UpdateAction from './UpdateActionButton';
import { Config } from './ConfigCard';
import DownloadButton from './DownloadButton';

export default function ConfigCardControls({
  config,
  downloadAction,
}: {
  config: Config;
  downloadAction: () => void;
}) {
  const { data: session } = useSession();

  const userId = config?.user?.id.toString();
  const sessionUserId =
    (session?.user?.image ?? '').match(/avatars\/(\d+)\//)?.[1] ?? '0';

  return (
    <div className="flex gap-2">
      <DownloadButton downloadAction={downloadAction} />
      {(process.env.NODE_ENV === 'development' || userId === sessionUserId) && (
        <UpdateAction config={config} />
      )}
    </div>
  );
}
