
const InsuranceList = () => {

  return (
        <div>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mặt hàng</th>
                  <th>Số lượng bảo hành</th>
                  <th>Đại lý phân phối</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                    <td>1</td>
                    <td>Asus</td>
                    <td>1000</td>
                    <td>Đại lý 1</td>
                    <td>Đã chuyển về cơ sở sản xuất</td>
                  </tr>
              </tbody>
            </table>
        </div>
  );
};

export default InsuranceList;