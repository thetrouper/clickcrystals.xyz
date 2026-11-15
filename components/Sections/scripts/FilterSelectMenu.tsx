import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterSelectMenu = ({ value, onChange, className }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={`w-[200px] md:w-[280px] ${className ?? ''}`}>
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="bg-[#1e2535] border-[#276CB0]/30 text-[#F4F8FF]">
        <SelectItem value="All" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">All</SelectItem>
        <SelectItem value="anchor" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Anchor</SelectItem>
        <SelectItem value="crystal" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Crystal</SelectItem>
        <SelectItem value="hacks" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Hacks</SelectItem>
        <SelectItem value="macros" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Macro</SelectItem>
        <SelectItem value="totem" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Totem</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterSelectMenu;
