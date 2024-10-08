import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchCategoryMenu = ({ value, onChange }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[200px] md:w-[280px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="official">Official</SelectItem>
        <SelectItem value="bypasses">Bypasses</SelectItem>
        <SelectItem value="ghost">Ghost</SelectItem>
        <SelectItem value="legit">Legit</SelectItem>
        <SelectItem value="blatent">Blatent</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchCategoryMenu;
