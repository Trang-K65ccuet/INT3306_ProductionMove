
const InsuranceList = () => {

  return (
        <div>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã bảo hành</th>
                  <th>Mã sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Đại lý phân phối</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>BH2</td>
                    <td>DELL12345</td>
                    <td>Dell</td>
                    <td>Đại lý 1</td>
                    <td>Đã chuyển về cơ sở sản xuất</td>
                  </tr>
              </tbody>
            </table>
        </div>
  );
};

export default InsuranceList;