const Item = ({ obj, itemKey = 0, handleDelete = null }) => {

  const required = (attribute, source, key) => {

    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    const value = source[attribute];
    const capitalized = capitalize(attribute);

    return (
      <span
        className={value ? "" : "red"}
        key={key}
      >
        <b>{capitalized}:</b> {value ? value : "Required"}
      </span>
      );
  };

  return (
    <div
      className={handleDelete
        ? "preview-item with-delete"
        : "preview-item"
      }
      key={itemKey}
    >
    {
      Object.keys(obj).map((item, i) => {
        if (item === "id") return <></>;
        return required(item, obj, i)
      })
    }
    {
      handleDelete
        ?
        <button
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
        :
        <></>
    }
    </div>
  )
}

export default Item;