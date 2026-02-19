const FormInput = ({ label, name, type = "text", register, errors }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">{label}</label>

      <input
        type={type}
        {...register(name)}
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
