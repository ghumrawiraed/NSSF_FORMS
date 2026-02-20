const FormInput = ({ label, name, type ,register, errors, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">{label}</label>

      <input
     {...register(name, type === "number" ? { valueAsNumber: true } : {})}
      {...rest}
        className="border rounded px-3 py-2"
      />

      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
