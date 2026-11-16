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
      <SelectContent className="bg-brand-surface-select border-brand-blue/30 text-brand-text">
        <SelectItem
          value="All"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          All
        </SelectItem>
        <SelectItem
          value="anchor"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Anchor
        </SelectItem>
        <SelectItem
          value="crystal"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Crystal
        </SelectItem>
        <SelectItem
          value="hacks"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Hacks
        </SelectItem>
        <SelectItem
          value="macros"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Macro
        </SelectItem>
        <SelectItem
          value="totem"
          className="focus:bg-brand-blue/30 focus:text-brand-text"
        >
          Totem
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterSelectMenu;
