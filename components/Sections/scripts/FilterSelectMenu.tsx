import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterSelectMenu = ({ value, onChange }: any) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[200px] md:w-[280px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="anchor">Anchor</SelectItem>
        <SelectItem value="crystal">Crystal</SelectItem>
        <SelectItem value="hacks">Hacks</SelectItem>
        <SelectItem value="macros">Macro</SelectItem>
        <SelectItem value="totem">Totem</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterSelectMenu;
