export const Controls = ({ currentItem, totalItems, onChange }) => {
  return (
    <section>
      <button
        type="button"
        onClick={() => onChange(-1)}
        disabled={currentItem === 1}
      >
        backward
      </button>
      <button
        type="button"
        onClick={() => onChange(+1)}
        disabled={currentItem === totalItems}
      >
        forward
      </button>
    </section>
  );
};
