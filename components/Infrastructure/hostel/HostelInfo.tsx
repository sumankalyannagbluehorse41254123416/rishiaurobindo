import Link from "next/link";

export default function HostelInfo() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        {/* Main Title */}
        <div className="title_box">
          <h3>Hostel</h3>
        </div>

        {/* Rules & Regulations */}
        <div className="lan_info_inner">
          <div className="title_box2">
            <h3>Rules &amp; Regulations of Hostel</h3>
          </div>

          <div
            style={{
              fontFamily: "Times New Roman",
              fontSize: "18px",
              textAlign: "left",
            }}
          >

            <p style={{ lineHeight: "1.5" }}>
               Students should read the rules and regulations before signing
              the application form.
              <br />
              1. Smoking, Alcohol &amp; Narcotic consumption is strictly
              prohibited in and around the Hostel premises. Strict action will
              be taken against offenders.
              <br />
              2. Strict adherence to the prescribed dress code is required.
              Decency in dressing &amp; demeanor is a must.
              <br />
              3. Loitering in the Hostel campus during the class hours will
              not be appreciated.
              <br />
              4. The Management &amp; Staff will not be responsible for
              personal belongings.
              <br />
              5. Late comers will be penalized.
              <br />
              6. Students must keep the Campus &amp; Rooms clean. Defacing
              walls, equipment, furniture etc., is strictly prohibited.
              <br />
              7. Birthday/Other Celebrations are strictly prohibited in
              Hostel.
              <br />
              8. Students must turn off all the electrical equipment &amp;
              lights before leaving their rooms.
              <br />
              9. Students are not allowed to use electric stoves, heaters etc
              in rooms except in designated places.
              <br />
              10. Students are not allowed to organize any group activities
              in their room.
              <br />
              11. Food will be served only in the designated Dining Hall(s)
              and only during the specified timings. Wasting food &amp; water
              will not be encouraged.
              <br />
              12. All lights must be switched off before 11 pm in the rooms.
              Only study lamps are permitted.
              <br />
              13. Students are not allowed to use Mobile phones after 10 pm.
              Cell phones of those at fault will be confiscated.
              <br />
              14. Tipping of Wardens, Security Guards, Cleaning staff etc., is
              not permitted.
              <br />
              15. Visitors are allowed only in AV Room between: 4:30 p.m. and
              6:30 p.m. Visitors are not allowed beyond the visiting area. No
              outside Guest/Students will be allowed inside the hostel.
              <br />
              16. Any complaints regarding electric equipment, plumbing etc.,
              is required to be entered in the &lsquo;Complaints Book&rsquo;.
              <br />
              17. Students should not enter rooms of other students without
              permission.
              <br />
              18. Silence: Strict silence shall be observed in hostel from
              11.00 pm to 5.30 am. Care should be taken at all times to ensure
              that music/loud talking is NOT audible outside the room.
              <br />
              19. Any manner of festivities and noise making/celebrations will
              not be entertained, which may cause disturbance to other inmates
              in the hostel premises.
              <br />
              20. Students during their stay in the hostel will be governed by
              the management rules.
            </p>
          </div>
        </div>

        {/* Hostel Application Form */}
        <div className="lan_info_inner">
          <div className="title_box2">
            <h3>Hostel Application Form</h3>
          </div>

          <p>
            <Link
              href="https://wip.tezcommerce.com:3304/admin/module/25/1668407985780.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-border"
            >
              Download
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}