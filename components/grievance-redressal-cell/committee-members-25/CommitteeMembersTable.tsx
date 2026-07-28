export default function CommitteeMembersTable() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive">
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Sl. No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Contact No</th>
                  <th>E-Mail ID</th>
                </tr>

                <tr>
                  <td>1.</td>
                  <td>Mr. Mithun Barik</td>
                  <td>Secretary &amp; Chairperson</td>
                  <td>9933722796</td>
                  <td>mithun123.barik@gmail.com</td>
                </tr>

                <tr>
                  <td>2.</td>
                  <td>Miss. Sulagna Chakraborty</td>
                  <td>Convener</td>
                  <td>7001069922</td>
                  <td>chakraborty.sulagna7@gmail.com</td>
                </tr>

                {/* Other rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}