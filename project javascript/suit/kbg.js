while (ulang) {

	var comp = Math.random();

	if (comp < 0.34) {
		comp = 'kertas';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'batu';
	} else {
		comp = 'gunting'
	}

	var hasil = '';
	if (player == comp) {
		hasil = 'SERI';
	} else if (player == 'kertas') {
		if (comp == 'batu') {
			hasil = 'MENANG'
		} else {
			hasil = 'KALAH'
		}
	} else if (player == 'batu') {
		if (comp = 'gunting') {
			hasil = 'MENANG'
		} else {
			hasil = 'KALAH'
		}
	} else if (player == 'gunting') {
		if (comp == 'kertas') {
			hasil = 'MENANG'
		} else {
			hasil = 'KALAH'
		}
	} else {
		hasil = 'salah memilih'
	}

	alert('kamu memilih  : ' + player + '\nkomputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil)