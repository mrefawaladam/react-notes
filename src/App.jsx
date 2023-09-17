import React, { Component } from 'react';
import CatatanList from './components/CatatanList';
import TambahCatatan from './components/TambahCatatan';
import PencarianCatatan from './components/PencarianCatatan';
import ArsipCatatan from './components/ArsipCatatan';
import data from './utils/data.json';
import './styles/App.css';  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: data,
      keyword: ''
    };
  }

  handleTambahCatatan = (newNote) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote]
    }));
  };

  handleHapusCatatan = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id)
    }));
  };

  handleCari = (kw) => {
    this.setState({ keyword: kw });
  };
  handleArsipkan = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    }));
  };
  
  render() {
    const { notes, keyword } = this.state;

    return (
      <div>
        <h1>APLIKASI CATATAN</h1>
        <TambahCatatan onTambah={this.handleTambahCatatan} />
        
        <PencarianCatatan onCari={this.handleCari} keyword={keyword} />
        <CatatanList
        notes={notes.filter(
            (note) =>
            !note.archived &&
            note.title.toLowerCase().includes(keyword.toLowerCase())
        )}
        onDelete={this.handleHapusCatatan}
        onArsipkan={this.handleArsipkan}
        />

        <ArsipCatatan
        notes={notes.filter((note) => note.archived)}
        onArsipkan={this.handleArsipkan}
        />

      </div>
    );
  }
}

export default App;
