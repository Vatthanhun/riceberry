import React  from 'react';

export const Income = (props) => {
  return (
    <div id='income' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 style={{fontWeight:900}}>Income</h2>
          <h3 style={{color:'#FF0000', fontWeight:800}}>
          จะดีไหม หากข้าวที่คุณรับประทาน ทำให้คุณมีรายได้ !!
          </h3>
          <p style={{color:'#00FF00'}}>
          เพียงคุณสมัครเป็นสมาชิกเพื่อสั่งซื้อ ข้าวไรซ์เบอรี่ ตรา "VBerry" คุณจะได้รับสิทธิ์เป็น "ผู้แนะนำ"
          </p>
          <p style={{color:'#00FF00'}}>
          เพื่อแนะนำเพื่อนหรือญาติมาสั่งซื้อข้าวไรซ์เบอรี่ ตรา "VBerry" เพียง 2 ท่าน คุณจะได้รับค่าแนะนำ 9% ของทุกคนที่คุณแนะนำ
          </p>
          <p style={{color:'#A52A2A'}}>
          และถ้าผู้ที่คุณแนะนำ ได้แนะนำ ข้าวไรซ์เบอรี่ ตรา "VBerry" อีกคนละ 2 ท่าน นอกจากผู้ที่คุณแนะนำ จะได้รับคนละ 9% แล้ว
          </p>
          <p style={{color:'#A52A2A'}}>
          คุณจะได้รับ 8% ของทุกคนในลำดับชั้นนั้นที่สั่งซื้อและจะได้รับเป็นอัตราส่วนลดลงไป เทียบเป็นตาราง ได้ดังนี้
          </p>
          <div>
        <img src="img/plan.jpg" className="img-responsive" alt="" />{" "}
        <div><br /></div>
        </div>
        <h3 style={{color:'#FF0000', fontWeight:800}}>
          โดย Plan A คือการสั่งซื้อข้าวถุงละ 1 กิโลกรัม จำนวน 1 ถุง ในราคา 100 บาท + ค่าส่ง 50 บาท <br />
          และ Plan B คือการสั่งซื้อข้าวถุงละ 1 กิโลกรัม จำนวน 5 ถุง ในราคา 500 บาท + ค่าส่ง 100 บาท
          </h3>
        </div>

        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='income-desc'>
                    <h3>{d.name}</h3>
                    <img src={d.img} alt='' />
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  )
}
