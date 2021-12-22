import React from "react"
import Next from "../image/next.png"
import Button from "@mui/material/Button"
import "../styles/confirm.css";
import { Link } from "react-router-dom"

function Confirm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row mt-5">
                        <div className="col">
                            <h1 className="title">Konfirmasi update stok</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className="rubik14px400 mb-0">Selisih</p>
                            <p className="rubik32px400 mb-0">+533 pcs</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <p className="rubik14px400 mb-0">Di sistem</p>
                            <p className="rubik20px400 mb-0">10 pcs</p>
                        </div>
                        <div className="col-6 d-flex flex-row align-items-center">
                            <div className="me-3">
                                <img src={Next} alt="next" width="16px"/>
                            </div>
                            <div>
                                <p className="rubik14px400 mb-0">Hasil update stok</p>
                                <p className="rubik20px400 mb-0">543 pcs</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <table className="table">
                                <thead className="txtHead">
                                    <tr>
                                        <th>Keterangan</th>
                                        <th>Detail</th>
                                        <th className="thRight">Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="nunito14px700">Hasil update stok</th>
                                        <th className="nunito14px">3 tablet, 4 strip (10s), 1 dus (5x10s)</th>
                                        <th className="nunito14pxright">543 pcs</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex flex-row justify-content-between mx-2">
                            <p className="nunito14px700color">Total hasil stok opname</p>
                            <p className="nunito14px700">543 pcs</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="rubik16px700">Catatan</p>
                            <textarea className="form-control" ></textarea>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end align-items-center mt-4">
                        <Link to="/"><Button className="me-2" variant="contained">Simpan</Button></Link>
                        <Button variant="outlined">Batal</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm;