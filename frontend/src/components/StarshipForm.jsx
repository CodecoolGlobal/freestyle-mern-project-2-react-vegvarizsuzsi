function StarshipForm({ starship, onSave, onCancel, disabled }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = [...formData.entries()];

    const starship = entries.reduce((acc, entry) => {
      const [k, v] = entry;
      acc[k] = v;
      return acc;
    }, {});

    onSave(starship);
  };

  console.log(starship);
  return (
    <form className="StarshipForm" onSubmit={onSubmit}>
      {starship && (
        <input type="hidden" name="_id" defaultValue={starship._id} />
      )}

      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          defaultValue={starship ? starship.name : null}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="cost_in_credits">Cost in credits:</label>
        <input
          defaultValue={starship ? starship.cost_in_credits : null}
          name="cost_in_credits"
          id="cost_in_credits"
        />
      </div>

      <div className="control">
        <label htmlFor="length">Length:</label>
        <input
          defaultValue={starship ? starship.length : null}
          name="length"
          id="length"
        />
      </div>
      <div className="control">
        <label htmlFor="passengers">Passengers:</label>
        <input
          defaultValue={starship ? starship.passengers : null}
          name="passengers"
          id="passengers"
        />
      </div>
      <div className="control">
        <label htmlFor="class">Starship class:</label>
        <input
          defaultValue={starship ? starship.starship_class : null}
          name="class"
          id="class"
        />
      </div>
      <div className="control">
        <label htmlFor="img">Image:</label>
        <input
          defaultValue={starship ? starship.img : null}
          name="img"
          id="img"
          type="url"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {starship ? "Update starship" : "Create starship"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default StarshipForm;
