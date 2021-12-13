import React, { useState } from "react";
import { Link } from "react-router-dom"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles/detail.css";
import Back from "../image/back.png";


const style = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 2,
    borderRadius: "8px",
    boxShadow: 4,
};

function Detail() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="container">
            <div className="row justify-content-between mt-3">
                <div className="col-10">
                <a href="/" className="back">
                    <div className="row">
                        <div className="col-1 col-sm-1">
                            <img src={Back} width="16px" alt="back"/>
                        </div>
                        <div className="col">
                            <p>Stoke Pokemon</p>
                        </div>
                    </div>
                </a>
                    <h1 className="title">Pikachu</h1>
                </div>
                <div className="col">
                    <button onClick={handleOpen} className="btnUpdate" type="button">Update stok</button>
                </div>
            </div>
            <div className="sisaStok row mt-4">
                <div className="col">
                    <p className="rubik14px mb-0">Sisa stok</p>
                    <p className="rubik32px">10 pcs</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p className="rubik20px mb-0">Riwayat stok</p>
                    <p className="nunito14px">Satuan stok dalam pcs</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="txtHead">
                            <tr>
                                <th scope="col-2">Waktu</th>
                                <th scope="col-2">Kegiatan</th>
                                <th scope="col-4">Catatan</th>
                                <th className="thRight" scope="col-2">Jmlh</th>
                                <th className="thRight" scope="col-2">Stok</th>
                            </tr>
                        </thead>
                        <tbody className="txtBody">
                            <tr>
                                <th className="nunito14px" scope="row">2 Apr 2021, 08.00</th>
                                <th className="kegiatan">Update stok</th>
                                <th className="nunito12px">Stok Awal</th>
                                <th className="jmlh">10</th>
                                <th className="stok">10</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col" align="center">
                                    <p className="rubik20px">Update stok</p>
                                    <p className="nunito14px mx-5">Masukkan jumlah stok yang tersedia di rak saat ini</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col">
                                    <table className="table">
                                        <thead className="txtHead">
                                            <tr>
                                                <th scope="col-6">Kemasan</th>
                                                <th className="thRight" scope="col-3">Jumlah</th>
                                                <th className="thRight" scope="col-3">Stok</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="nunito14px700" scope="row">Pcs</th>
                                                <th className="nunito14pxright">
                                                    1 x <input></input> =
                                                </th>
                                                <th className="nunito14pxright">0</th>
                                            </tr>
                                            <tr>
                                                <th className="nunito14px700" scope="row">Lusin</th>
                                                <th className="nunito14pxright">
                                                    12 x <input></input> =
                                                </th>
                                                <th className="nunito14pxright">0</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex flex-row justify-content-between mx-2">
                                    <div className="d-flex flex-row justify-content-start">
                                        <p className="nunito14px700">Total stok</p>
                                        <p className="nunito14px">(dalam pcs)</p>
                                    </div>
                                    <p className="nunito14px700">0</p>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end align-items-center mt-4">
                                <Button component={Link} to="/confirm" className="me-2" variant="contained">Simpan</Button>
                                <Button onClick={handleClose} variant="outlined">Batal</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Detail;