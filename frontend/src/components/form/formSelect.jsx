const FormSelect = ({
  label,
  name,
  options = [],
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">
        {label}
      </label>

      <select
        {...register(name)}
        className="border rounded px-3 py-2 bg-white dark:bg-gray-700"
      >
        <option value="">-- Select --</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default FormSelect;
