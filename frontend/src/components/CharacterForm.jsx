function CharacterForm({ character, onSave, onCancel, disabled }) {

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        const character = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        onSave(character);
    };

    console.log(character);
    return (
        <form className="CharacterForm" onSubmit={onSubmit}>
            {character && (
                <input type="hidden" name="_id" defaultValue={character._id} />
            )}

            <div className="control">
                <label htmlFor="name">Name:</label>
                <input
                    defaultValue={character ? character.name : null}
                    name="name"
                    id="name"
                />
            </div>

            <div className="control">
                <label htmlFor="birth">Birth year:</label>
                <input
                    defaultValue={character ? character.birthYear : null}
                    name="birthyear"
                    id="birthyear"
                />
            </div>

            <div className="control">
                <label htmlFor="height">Height:</label>
                <input
                    defaultValue={character ? character.height : null}
                    name="height"
                    id="height"
                />
            </div>
            <div className="control">
                <label htmlFor="mass">Mass:</label>
                <input
                    defaultValue={character ? character.mass : null}
                    name="mass"
                    id="mass"
                />
            </div>
            <div className="control">
                <label htmlFor="gender">Gender:</label>
                <input
                    defaultValue={character ? character.gender : null}
                    name="gender"
                    id="gender"
                />
            </div>
            <div className="control">
                <label htmlFor="img">Image:</label>
                <input
                    defaultValue={character ? "placeholder.jpg" : null}
                    name="img"
                    id="img"
                    type="url"
                    
                    />
            </div>

            <div className="buttons">
                <button type="submit" disabled={disabled}>
                    {character ? "Update character" : "Create character"}
                </button>

                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
    
};

export default CharacterForm