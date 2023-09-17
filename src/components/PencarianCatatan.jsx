import React from 'react';

class PencarianCatatan extends React.Component {
  render() {
    const { onCari, keyword } = this.props;

    return (
      <input
        type="text"
        placeholder="Cari berdasarkan judul"
        value={keyword}
        onChange={(e) => onCari(e.target.value)}
      />
    );
  }
}

export default PencarianCatatan;
