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
      <SelectTrigger className="w-full sm:w-[200px] md:w-[280px] bg-slate-900 border-slate-700 text-white hover:border-slate-600">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="bg-slate-900 border-slate-700">
        <SelectItem
          value="All"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          All
        </SelectItem>
        <SelectItem
          value="anchor"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          Anchor
        </SelectItem>
        <SelectItem
          value="crystal"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          Crystal
        </SelectItem>
        <SelectItem
          value="hacks"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          Hacks
        </SelectItem>
        <SelectItem
          value="macros"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          Macros
        </SelectItem>
        <SelectItem
          value="totem"
          className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
        >
          Totem
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterSelectMenu;
