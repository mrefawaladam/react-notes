import React, { Component } from 'react';

class TambahCatatan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: '',
      isi: '',
      errorMessage: '',
      errorMessageColor:'red'
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errorMessage: ''
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { judul, isi } = this.state;
    if (!judul || !isi) {
      this.setState({
        errorMessage: 'Judul dan Isi harus diisi.',
        errorMessageColor: 'red'
      });
      return;
    }
    const newNote = {
      id: +new Date(),
      title: judul,
      body: isi,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    this.props.onTambah(newNote);
    this.setState({
      judul: '',
      isi: '',
      errorMessage: 'Catatan berhasil ditambahkan.',
      errorMessageColor: 'green'
    });
  };

  render() {
    const { judul, isi } = this.state;

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={judul}
          onChange={(e) => this.setState({ judul: e.target.value })}
          maxLength={50}
        />
        <textarea
          placeholder="Isi"
          value={isi}
          onChange={(e) => this.setState({ isi: e.target.value })}
        />
        <button type="submit">Tambah Catatan</button>
      </form>
      <div style={{ color: this.state.errorMessageColor }}>
      {this.state.errorMessage}
    </div>
    </div>

    );
  }
}

export default TambahCatatan;
