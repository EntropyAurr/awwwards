function Button({ id, title, leftIcon, rightIcon, containerClass }) {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}

      <span className="font-general relative inline-flex overflow-hidden text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </button>
  );
}

export default Button;
