function PlanetForm({ planet, onSave, onCancel, disabled }) {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const planet = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        onSave(planet);
    };

    console.log(planet);
    return (
        <form className="planetForm" onSubmit={onSubmit}>
            {planet && (
                <input type="hidden" name="_id" defaultValue={planet._id} />
            )}

            <div className="control">
                <label htmlFor="name">Name:</label>
                <input
                    defaultValue={planet ? planet.name : null}
                    name="name"
                    id="name"
                />
            </div>

            <div className="control">
                <label htmlFor="diameter">Diameter:</label>
                <input
                    defaultValue={planet ? planet.diameter : null}
                    name="diameter"
                    id="diameter"
                />
            </div>

            <div className="control">
                <label htmlFor="climate">Climate:</label>
                <input
                    defaultValue={planet ? planet.climate : null}
                    name="climate"
                    id="climate"
                />
            </div>
            <div className="control">
                <label htmlFor="terrain">Terrain:</label>
                <input
                    defaultValue={planet ? planet.terrain : null}
                    name="terrain"
                    id="terrain"
                />
            </div>
            <div className="control">
                <label htmlFor="population">Population:</label>
                <input
                    defaultValue={planet ? planet.population : null}
                    name="population"
                    id="population"
                />
            </div>
            <div className="control">
                <label htmlFor="img">Image:</label>
                <input
                    defaultValue={planet ? planet.img : null}
                    name="img"
                    id="img"
                    type="url"
                    />
            </div>

            <div className="buttons">
                <button type="submit" disabled={disabled}>
                    {planet ? "Update planet" : "Create planet"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
    
};

export default PlanetForm