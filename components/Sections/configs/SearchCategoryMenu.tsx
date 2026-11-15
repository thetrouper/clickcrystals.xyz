import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchCategoryMenu = ({ value, onChange, className }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={`w-[200px] md:w-[280px] ${className ?? ''}`}>
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="bg-[#1e2535] border-[#276CB0]/30 text-[#F4F8FF]">
        <SelectItem value="All" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">All</SelectItem>
        <SelectItem value="official" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Official</SelectItem>
        <SelectItem value="bypasses" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Bypasses</SelectItem>
        <SelectItem value="ghost" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Ghost</SelectItem>
        <SelectItem value="legit" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Legit</SelectItem>
        <SelectItem value="blatent" className="focus:bg-[#276CB0]/30 focus:text-[#F4F8FF]">Blatent</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchCategoryMenu;
