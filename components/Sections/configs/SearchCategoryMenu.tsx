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
      <SelectTrigger
        className="w-[200px] md:w-[280px] text-white"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent
        className="text-white"
        style={{
          background: 'rgb(10,13,24)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="official">Official</SelectItem>
        <SelectItem value="bypasses">Bypasses</SelectItem>
        <SelectItem value="ghost">Ghost</SelectItem>
        <SelectItem value="legit">Legit</SelectItem>
        <SelectItem value="blatant">Blatant</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchCategoryMenu;
