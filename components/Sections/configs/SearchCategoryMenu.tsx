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
      <SelectTrigger className="w-[200px] md:w-[280px] bg-slate-900 border-slate-700 text-white hover:border-slate-600 focus:border-blue-500">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="bg-slate-900 border-slate-700 text-white">
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
