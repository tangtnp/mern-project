const FormComponent=()=>{
    return (
        <div className="container p-5">
          <h1>เขียนบทความ</h1>
          <form>
            <dev className="form-group">
              <label>ชื่อบทความ</label>
              <input type="text" className="form-control"/>
            </dev>
            <dev className="form-group">
              <label>รายละเอียด</label>
              <textarea className="form-control" ></textarea>
            </dev>
            <dev className="form-group">
              <label>ผู้แต่ง</label>
              <input type="text" className="form-control"/>
            </dev>
          </form>
        </div>
      );
}
export default FormComponent;