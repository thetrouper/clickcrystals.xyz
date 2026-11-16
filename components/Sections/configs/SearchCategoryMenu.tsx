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
      <SelectContent className="bg-brand-surface-select border-brand-blue/30 text-brand-text">
        <SelectItem
          value="All"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          All
        </SelectItem>
        <SelectItem
          value="official"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Official
        </SelectItem>
        <SelectItem
          value="bypasses"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Bypasses
        </SelectItem>
        <SelectItem
          value="ghost"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Ghost
        </SelectItem>
        <SelectItem
          value="legit"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Legit
        </SelectItem>
        <SelectItem
          value="blatent"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Blatent
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchCategoryMenu;
