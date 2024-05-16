import React, { Component } from "react";
import Card from "../components/card"

class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            buku: [
                {
                    isbn: "001", judul: "Bulan", penulis: "Attaqi Fadhil",
                    penerbit: "Gramedia", harga: 90000,
                    cover: "https://upload.wikimedia.org/wikipedia/id/2/21/Sampul_novel_Bulan.jpeg"
                },
                {
                    isbn: "002", judul: "Bumi", penulis: "Attaqi Fadhil",
                    penerbit: "Gramedia", harga: 100000,
                    cover: "https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg"
                },
                {
                    isbn: "003", judul: "Matahari", penulis: "Attaqi Fadhil",
                    penerbit: "Gramedia", harga: 110000,
                    cover: "https://upload.wikimedia.org/wikipedia/id/4/4e/Sampul_novel_Matahari.jpeg"
                }

            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
            keyword: "",
            filterBuku: []
        }
        this.state.filterBuku = this.state.buku
    }
    Add = () => {
        // menampilkan komponen modal
        ("#modal_buku").modal("show")
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        ("#modal_buku").modal("show")
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({ buku: tempBuku })

            // menutup komponen modal_buku
            ("#modal_buku").modal("hide")
    }
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempBuku = this.state.buku
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)

            // hapus data
            tempBuku.splice(index, 1)

            this.setState({ buku: tempBuku })
        }
    }
    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLowerCase().includes(keyword) ||
                    item.penulis.toLowerCase().includes(keyword) ||
                    item.penerbit.toLowerCase().includes(keyword)
            })

            this.setState({ filterBuku: result })
        }
    }
    setUser = () => {
        // cek eksistensi dari session storage
        if (sessionStorage.getItem("user") === null) {
            // kondisi jika session storage "user" belum dibuat
            let prompt = window.prompt("Masukkan Nama Anda", "")
            if (prompt === null || prompt === "") {
                // jika user tidak mengisikan namanya
                this.setUser()
            } else {
                // jika user telah mengisikan namanya


                // simpan nama user ke session storage
                sessionStorage.setItem("user", prompt)


                // simpan nama user ke state.user
                this.setState({ user: prompt })
            }
        } else {
            // kondisi saat session storage "user" telah dibuat


            // akses nilai dari session storage "user"
            let name = sessionStorage.getItem("user")
            this.setState({ user: name })
        }
    }


    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []


        // cek eksistensi dari data cart pada localStorage
        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }


        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)


        if (existItem) {
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        } else {
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "")
            if (promptJumlah !== null && promptJumlah !== "") {
                // jika user memasukkan jumlah item yg dibeli


                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah

                // masukkan item yg dipilih ke dalam cart
                tempCart.push(selectedItem)


                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }

    render() {
        <input type="text" className="form-control my-2" placeholder="Pencarian"
            value={this.state.keyword}
            onChange={ev => this.setState({ keyword: ev.target.value })}
            onKeyUp={ev => this.searching(ev)}
        />

        return (
            <div className="container">
                <h4 className="text-info my-2">
                    Nama Pengguna: {this.state.user}
                </h4>
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />

                <div className="row">
                    {this.state.filterBuku.map((item, index) => (
                        <Card
                            judul={item.judul}
                            penulis={item.penulis}
                            penerbit={item.penerbit}
                            harga={item.harga}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                            onCart={ () => this.addToCart(item)}
                        />
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                Form Buku
                            </div>

                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.judul} onChange={ev => this.setState({ judul: ev.target.value })} required />
                                    Penulis Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penulis}
                                        onChange={ev => this.setState({ penulis: ev.target.value })}
                                        required />

                                    Penerbit Buku
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.penerbit}
                                        onChange={ev => this.setState({ penerbit: ev.target.value })}
                                        required />

                                    Harga Buku
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={ev => this.setState({ harga: ev.target.value })}
                                        required />

                                    Cover Buku
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({ cover: ev.target.value })}
                                        required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    componentDidMount() {
        this.setUser()
    }
}

export default Gallery;