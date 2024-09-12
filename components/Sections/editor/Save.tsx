'use client'

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { saveCode } from "@/lib/scripts"
import { useRouter } from "next/navigation"

type SaveProps = {
  receiveCode: any;
  disabled: boolean;
}

const Save = ({ receiveCode, disabled }: SaveProps) => {
  const router = useRouter();
  const [saveDisabled, setSaveDisabled] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setSaveDisabled(!saveDisabled);
    const code = receiveCode();
    const query = await saveCode(code);

    if (query.success) {
      navigator.clipboard.writeText(`${window.location.hostname}/editor/${query.id}`);
      router.push(`/editor/${query.id}`);
      toast({
        title: "Successfully saved snippet",
        description: "The link to share it has been copied to clipboard",
        variant: "passive"
      });
    } else {
      toast({
        title: "Failed to save snippet",
        description: query.error,
        variant: "destructive"
      })
    }

    setSaveDisabled(false);
  }

  return (
    <button className="btn border-transparent disabled:bg-[#4f7575] focus:ring-[#34adad] shadow-none bg-[#34adad] hover:bg-[#1e7e7e] font-semibold px-6 py-2.5 text-white text-sm w-full mb-4 lg:w-auto" disabled={saveDisabled || disabled} onClick={handleSave}>
      {saveDisabled && <FontAwesomeIcon icon={faSpinner} className="mr-2 size-4 animate-spin" />}
      <div className="flex flex-row justify-center inset-0">Save</div>
    </button>
  )
}

export default Save;
