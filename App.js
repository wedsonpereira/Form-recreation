import "./App.css"
import {Button, styled} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(40%)',
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 0,
});

function App() {
    return (
        <form className="root">
            <header className="header">
                <h1 className="header-h1">VYZEN</h1>
            </header>
            <div className="ins">
                <p>INSTRUCTIONS:</p>
                <p>Please fill out the following details accurately to apply for the position.Ensure you upload
                    necessary documents where required.</p>
                <p><i>*Indicates required question</i></p>
            </div>

            <div className="level1">
                <div className="level-h1"><h1>Level 1</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">First Name</label>
                                <input type="text" name="fname" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Middle Name</label>
                                <input type="text" name="mname" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="sname" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">DOB</label>
                                <input type="date" name="dob" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Age</label>
                                <input type="number" name="age" id="" required/>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Blood Group</label>
                                <select name="blood" className="custom-select" id="">
                                    <option value="">A+</option>
                                    <option value="">A-</option>
                                    <option value="">AB+</option>
                                    <option value="">AB-</option>
                                    <option value="">O+</option>
                                    <option value="">O-</option>
                                </select>
                            </div>
                            <div className="input-group ">
                                <label htmlFor="">Merital Status</label>
                                <div className="inline-radio">
                                    <input type="radio" name="marital" value="Married" id=""/>
                                    <label htmlFor="">Married</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="marital" id="" value="single"/>
                                    <label htmlFor="">UnMarried</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Gender</label>
                                <div className="inline-radio">
                                    <input type="radio" name="gender" id="" value="male" required/>
                                    <label htmlFor="">Male</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="gender" id="" value="female"/>
                                    <label htmlFor="">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-2">
                        <div className="input-group">
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Country</label>
                            <select name="country" className="custom-select" id="">
                                <option value="">Nepal</option>
                                <option value="">USA</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Phone number</label>
                            <input type="number" name="phone" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Alternative Phone</label>
                            <input type="number" name="alt_phone" id="" required/>
                        </div>
                    </div>
                </div>
            </div>

            {/*    2nd level*/}

            <div className="level2">
                <div className="level-h1"><h1>Level 2</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Current residential address</label>
                                <textarea name="address1" id="" cols="30" rows="10" required></textarea>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Current location</label>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Current residential address</label>
                                <textarea name="address2" id="" cols="30" rows="10" required></textarea>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Preffered location</label>
                                <input type="text" name="" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    3rd level*/}
            <div className="level3">
                <div className="level-h1"><h1>Level 3</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group ">
                                <label htmlFor="">Do you have a passport</label>
                                <div className="inline-radio">
                                    <input type="radio" name="marital" value="Yes" id=""/>
                                    <label htmlFor="">Yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="marital" id="" value="No"/>
                                    <label htmlFor="">No</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Passport number</label>
                                <input type="number" name="passport_no" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Passport Copy</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Pan card number</label>
                                <input type="number" name="pan_card_no" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Upload Your Pan Copy</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Aadhaar number</label>
                                <input type="number" name="Aadhaar_no" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Upload Your Aadhaar Copy</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Driving licence</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Voter Id Copy</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 4*/}
            <div className="level4">
                <div className="level-h1"><h1>Level 4</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group ">
                                <label htmlFor="">Profile Photo</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Work Link/Portfolio(Linkdin)</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please attach resume</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Skills</label>
                                <textarea name="" id="" cols="30" rows="8"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Please share the links of your online portfolio / Website (if None
                                    Mention
                                    NA)</label>
                                <textarea name="website_link" id="" cols="30" rows="5"></textarea>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please share the links of your online Social media liinks(Instagram,
                                    facebook,etc)</label>
                                <textarea name="social_media" id="" cols="30" rows="5"></textarea>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Languages</label>
                                <textarea name="languages" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 5*/}
            <div className="level5">
                <div className="level-h1"><h1>Level 5</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Education:Course</label>
                                <input type="text" name="e-course" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Education specialization</label>
                                <input type="text" name="E-specialization" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Education institution</label>
                                <input type="text" name="E-institution" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please Enter a Tentative Date you are expected to join us incase you
                                    are shorlisted/selected</label>
                                <input type="date" name="DOJ" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Age</label>
                                <input type="number" name="age" id="" required/>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Education:Year of Completion</label>
                                <input type="date" name="EOC" id=""/>
                            </div>
                            <div className="input-group ">
                                <label htmlFor="">Education Pass percentage</label>
                                <input type="text" name="percentage" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Proof of education completion</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file" required/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Are you a Fresher</label>
                                <div className="inline-radio">
                                    <input type="radio" name="fresher" id="" value="male" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="fresher" id="" value="female"/>
                                    <label htmlFor="">no</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-2">
                        <div className="input-group">
                            <label htmlFor="">Any certifications</label>
                            <div className="inline-radio">
                                <input type="radio" name="certification" id="" value="yes" required/>
                                <label htmlFor="">yes</label>
                            </div>
                            <div className="inline-radio">
                                <input type="radio" name="certificcation" id="" value="no"/>
                                <label htmlFor="">no</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Certifications Obtained(List the certifications</label>
                            <input type="text" name="certifications-obtained" id=""/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Name of the certifications issuing authority</label>
                            <input type="text" name="certification_authority" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">certification completion date</label>
                            <input type="number" name="CCD" id="" required/>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 6*/}

            <div className="level6">
                <div className="level-h1"><h1>Level 6</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Total work experience</label>
                                <input type="number" name="work_exp" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Organization Name</label>
                                <input type="text" name="Org_name" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Designation/job title</label>
                                <input type="text" name="job_title" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Employment start date</label>
                                <input type="date" name="ESD" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Employment End date</label>
                                <input type="date" name="EED" id="" required/>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">List down your roles and resposibilities</label>
                                <input type="text" name="rol_res" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Reason for leaving</label>
                                <input type="text" name="res_for_leave" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Current CTC</label>
                                <input type="text" name="C_CTC" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Expected CTC</label>
                                <input type="text" name="E_CTC" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Notice Period</label>
                                <input type="text" name="notice_period" id="" required/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 7*/}
            <div className="level7">
                <div className="level-h1"><h1>Level 7</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-30">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Please upload your Salary Slips/Payslips (Last 3 Months) for your
                                    total experience</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please upload your Bank Statements (Last 3 Months) for your total
                                    experience
                                    *</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Upload Offer Letter/Joining Letter/Employment Agreement from
                                    organization(s) for your total experience
                                    *
                                </label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-30">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Upload Relieving Letter/Experience Certificates / Acceptance of
                                    resignation from present employment</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Upload increment letter from from organization(s) for your total
                                    experience
                                    *</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                        </div>
                        <div className="inbox-2"></div>
                    </div>
                </div>
            </div>

            {/*    level 8*/}

            <div className="level8">
                <div className="level-h1"><h1>Level 8</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1 flex-start">
                            <div className="input-group">
                                <label htmlFor="">Are you Currently Serving your Notice Period? *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="serving_notice" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="serving_notice" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Mention your Last working Date
                                    *</label>
                                <input type="date" name="LWD" id="" required/>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Do you hold any existing offers that we should be aware of? *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="existing_offers" id="" value="yes"/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="existing_offers" id="" value="no"/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="existing_offers" id="" value="Maybe"/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">If yes, enter the name of the organization you hold an offer from
                                    *</label>
                                <input type="text" name="org_offer_hold" id="" required/>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Please upload the offer letter or proof of offer you hold*</label>
                                <Button className="inputfile"
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon/>}
                                >
                                    Upload file
                                    <VisuallyHiddenInput type="file"/>
                                </Button>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please confirm if you have accepted the offer you hold? *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="if_accepted" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="if_accepted" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="if_accepted" id="" value="Maybe" required/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                        </div>
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Please mention the date you have to accept the Offer you hold or the
                                    date you have Accepted the Offer</label>
                                <input type="date" name="date_of_offer_accept" id="" required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">If no, mention the expected/proposed CTC you are offered *</label>
                                <input type="text" name="C_CTC_offered" id="" required/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 9*/}
            <div className="level9">
                <div className="level-h1"><h1>Level 9</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Please mention One reference contact person name from this
                                    organization
                                </label>
                                <input type="text" name="contact-ref" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">One reference contact person's Designation from this organization
                                    *</label>
                                <input type="text" name="person_design" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">One reference contact person's Contact No from this organization
                                    *</label>
                                <input type="tel" min={0} max={10} name="" id=""/>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-40">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">One reference contact person's Email ID from this organization
                                    *</label>
                                <input type="text" name="person_email" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">One reference contact person's - Please state the Professional
                                    Relationship with the mentioned reference contact person's</label>
                                <input type="text" name="relationship_with_person" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Please mention the date we can Reference Check *</label>
                                <input type="date" name="date_for_ref_check" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 10*/}
            <div className="level10">
                <div className="level-h1">
                    <h1>Level 10</h1>
                </div>
                <div className="l1-box">
                    <div className="l1-box-1 height-25">
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Employment Verification Consent *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="emp_consent" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="emp_consent" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="emp_consent" id="" value="maybe" required/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-25">
                        <div className="inbox-2">
                            <div className="input-group">
                                <label htmlFor="">Authorization to contact previous employers and references *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="Auth_prev_emp" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="Auth_prev_emp" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="Auth_prev_emp" id="" value="Maybe" required/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*    level 11*/}
            <div className="level11">
                <div className="level-h1"><h1>Level 11</h1></div>
                <div className="l1-box">
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Consent to conduct background checks *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="consent_bg_check" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="consent_bg_check" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="consent_bg_check" id="" value="Maybe" required/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Consent to Drug/Alcohol Testing Consent *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="consent_drg_check" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="conset_drg_check" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="conset_drg_check" id="" value="Maybe" required/>
                                    <label htmlFor="">Maybe</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l1-box-1 height-50">
                        <div className="inbox-1">
                            <div className="input-group">
                                <label htmlFor="">Disclosure of any Criminal Convictions or Pending Criminal Cases *</label>
                                <div className="inline-radio">
                                    <input type="radio" name="criminal_convictions" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="criminal_convictions" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Details of any Criminal Convictions or Pending Criminal Cases *</label>
                                <input type="text" name="criminal_conviction_detail" id=""/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">By submitting this form, I acknowledge that all the information
                                    provided is true and accurate to the best of my knowledge.</label>
                                <div className="inline-radio">
                                    <input type="radio" name="conclusion" id="" value="yes" required/>
                                    <label htmlFor="">yes</label>
                                </div>
                                <div className="inline-radio">
                                    <input type="radio" name="conclusion" id="" value="no" required/>
                                    <label htmlFor="">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default App;
