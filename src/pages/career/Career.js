import React from 'react';
import './career.css';

// Framer Motion
import { motion as m } from 'framer-motion';

const Career = () => {
  return (
    <m.div
      className='career'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <div className="career-left-side">
        <h3>Bergabung dalam tim kami!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae at! Laboriosam accusamus optio assumenda aliquid quaerat, laborum amet repellendus hic aspernatur repudiandae, libero quisquam totam in voluptates incidunt inventore. Molestiae autem consectetur repellat facere vitae quibusdam voluptas natus est, ducimus praesentium officia itaque dolores nobis pariatur sapiente iste nam!</p>
      </div>
      <div className="career-right-side">
        <h3 className='title-right-side'>Form Karir</h3>
        <form action="">
          <div className="form-section">
            <h3>Posisi yang dilamar : </h3>
            <label htmlFor='position'>Posisi yang Diinginkan</label>
            <select name="position" id="position" className='select-option' required>
              <option value="ui/ux">UI/UX Designer</option>
              <option value="full-stack">Full Stack Web Developer</option>
              <option value="cs">Customer Service</option>
              <option value="data-entry">Data Entry</option>
              <option value="it-support">IT Support</option>
            </select>
          </div>

          <div className="form-section">
            <h3>Biografi : </h3>
            <div className="inner-form-section">
              <label htmlFor="name">Nama Lengkap</label>
              <input type="text" name='name' id='name' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="born">Tanggal Lahir</label>
              <input type="date" name='born' id='born' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="no-hp">Nomor Handphone</label>
              <input type="number" name='no-hp' id='no-hp' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="address">Alamat</label>
              <input type="text" name='address' id='address' required/>
            </div>
          </div>

          <div className="form-section">
            <h3>Pendidikan : </h3>
            <div className="inner-form-section">
              <label htmlFor="year-school">Periode</label>
              <div className="sub-inner-form">
                <input type="text" placeholder='Dari' className='from' id="year-school" required/>
                <input type="text" placeholder='Ke' className='to' required/>
              </div>
            </div>
            <div className="inner-form-section">
              <label htmlFor="institusi">Institusi</label>
              <input type="text" id='institusi' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="studi">Bidang Studi</label>
              <input type="text" id='studi' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="ipk">Nilai Akhir / Nilai Rata-rata</label>
              <input type="text" id='ipk' required/>
            </div>
          </div>

          <div className="form-section">
            <h3>Pengalaman Kerja : </h3>
            <div className="inner-form-section">
              <label htmlFor="year-experience">Periode</label>
              <div className="sub-inner-form">
                <input type="text" placeholder='Dari' className='from' id='year-experience' required/>
                <input type="text" placeholder='Ke' className='to' required/>
              </div>
            </div>
            <div className="inner-form-section">
              <label htmlFor="company">Perusahaan</label>
              <input type="text" id='company' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="position-job">Posisi</label>
              <input type="text" id='position-job' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="salary">Gaji</label>
              <input type="number" id='salary' required/>
            </div>
            <div className="inner-form-section">
              <label htmlFor="job-desk">Tugas Kerja</label>
              <input type="text" id='job-desk' required/>
            </div>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </m.div>
  )
}

export default Career;