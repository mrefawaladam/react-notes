import React from 'react';

class CatatanList extends React.Component {
  render() {
    const { notes, onDelete, onArsipkan } = this.props;

    return (
      <div>
       {notes.map((note) => (
        <div key={note.id} className="catatan-card">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => onDelete(note.id)} className="btn-delete">
            Hapus
            </button>
            <button onClick={() => onArsipkan(note.id)} className="btn-arsip">
            {note.archived ? 'Unarchive' : 'Archive'}
            </button>
        </div>
        ))}
      </div>
    );
  }
}

export default CatatanList;
