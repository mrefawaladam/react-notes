import React from 'react';

class ArsipCatatan extends React.Component {
  render() {
    const { notes, onArsipkan } = this.props;

    return (
      <div>
        <h2>Catatan Terarsip</h2>
        {notes
          .filter((note) => note.archived)
          .map((note) => (
            <div key={note.id}  className="catatan-card">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <button className="btn-arsip" onClick={() => onArsipkan(note.id)}>
                {note.archived ? 'Batal Arsip' : 'Arsipkan'}
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default ArsipCatatan;
