class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand sticky-top navbar-light bg-light"">
                <div class="container">
                    <span class="navbar-logo h2"> The Virginia Solar Permit Map </span>
                    <div class="collapse navbar-collapse"></div>
                        <ul class="navbar-nav h5">
                            <li class="nav-item px-2">
                                <a href="../index.html" class="nav-link"> Home </a>
                            </li>

                            <li class="nav-item px-2">
                                <a href="../about.html" class="nav-link"> About </a>
                            </li>

                            <li class="nav-item px-2">
                                <a class="nav-link" data-bs-toggle="modal" data-bs-target="#abbrev-modal">
                                    Abbreviations
                                </a>
                            </li>

                            <li class="nav-item dropdown px-2">
                                <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"> Process Maps </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="swim-lanes/exempt-130-permit.html" class="dropdown-item">
                                                Exemption from Section 130 Permit
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>

                                        <li>
                                            <a href="swim-lanes/deq-130-permit.html" class="dropdown-item">
                                                DEQ Section 130 Permit
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="swim-lanes/noi-500-kw.html" class="dropdown-item">
                                                NOI to Construct an EGF with Rated Capacity of &lt5 MW
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="swim-lanes/deq-pbr.html" class="dropdown-item">
                                                DEQ Permit by Rule of Full Solar Energy Project 
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="swim-lanes/cpcn-5-mw.html" class="dropdown-item">
                                                CPCN for Facilities 5 MW to 100 MW
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="swim-lanes/cpcn-100-mw.html" class="dropdown-item">
                                                CPCN for Facilities &gt100 MW 
                                            </a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                </div>
            </nav>
            `;
    }
}

class SwimLaneNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand navbar-light bg-light">
                <div class="container">
                    <span class="navbar-logo h2"> The Virginia Solar Permit Map </span>
                    <div class="collapse navbar-collapse"></div>
                        <ul class="navbar-nav h5">
                            <li class="nav-item px-2">
                                <a href="../index.html" class="nav-link"> Home </a>
                            </li>

                            <li class="nav-item px-2">
                                <a href="../about.html" class="nav-link"> About </a>
                            </li>

                            <li class="nav-item px-2">
                                <a class="nav-link" data-bs-toggle="modal" data-bs-target="#abbrev-modal">
                                    Abbreviations
                                </a>
                            </li>

                            <li class="nav-item dropdown px-2">
                                <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"> Process Maps </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a href="exempt-130-permit.html" class="dropdown-item">
                                                Exemption from Section 130 Permit
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>

                                        <li>
                                            <a href="deq-130-permit.html" class="dropdown-item">
                                                DEQ Section 130 Permit
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="noi-500-kw.html" class="dropdown-item">
                                                NOI to Construct an EGF with Rated Capacity of &lt5 MW
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="deq-pbr.html" class="dropdown-item">
                                                DEQ Permit by Rule of Full Solar Energy Project 
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="cpcn-5-mw.html" class="dropdown-item">
                                                CPCN for Facilities 5 MW to 100 MW
                                            </a>
                                        </li>

                                        <li><hr class="dropdown-divider"></li>
                            
                                        <li>
                                            <a href="cpcn-100-mw.html" class="dropdown-item">
                                                CPCN for Facilities &gt100 MW 
                                            </a>
                                        </li>
                                    </ul>
                            </li>
                        </ul>
                </div>
            </nav>
            `;
    }
}

class Abbrev extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="modal fade" id="abbrev-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="abbrev-title">  Abbreviations </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"> SCC </th>
                        <td> State Coporation Commission </td>
                    </tr>

                    <tr>
                        <th scope="row"> DEQ </th>
                        <td> Virginia Department of Environmental Quality </td>
                    </tr>

                    <tr>
                        <th scope="row"> CPCN </th>
                        <td> Certificate of Public Convenience and Necessity </td>
                    </tr>

                    <tr>
                        <th scope="row"> NOI </th>
                        <td> Notice of Intent </td>
                    </tr>

                    <tr>
                        <th scope="row"> MW </th>
                        <td> Megawatt </td>
                    </tr>

                    <tr>
                        <th scope="row"> kw </th>
                        <td> Kilowatt </td>
                    </tr>

                    <tr>
                        <th scope="row"> EGF </th>
                        <td> Electric Generating Facility </td>
                    </tr>

                    <tr>
                        <th scope="row"> DOT </th>
                        <td> Department of Transportation </td>
                    </tr>

                    <tr>
                        <th scope="row"> DHR </th>
                        <td> Department of Historic Resources </td>
                    </tr>

                    <tr>
                        <th scope="row"> DCR </th>
                        <td> Department of Conversation and Recreation </td>
                    </tr>

                    <tr>
                        <th scope="row"> DWR </th>
                        <td> Department of Wildlife Resources </td>
                    </tr>

                    <tr>
                        <th scope="row"> ISA </th>
                        <td> Interconnection Service Agreeement </td>
                    </tr>

                    <tr>
                        <th scope="row"> WMPA </th>
                        <td> Wholesale Market Participation Agreement </td>
                    </tr>

                    <tr>
                        <th scope="row"> SGIP </th>
                        <td> Small Generator Interconnection Procedures </td>
                    </tr>

                    <tr>
                        <th scope="row"> Distr. </th>
                        <td> Distribution </td>
                    </tr>

                    <tr>
                        <th scope="row"> Trans. </th>
                        <td> Transmission </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-light">
                <img src="../images/VAEnergyLogo.png" class="va-energy-logo"> <img src="../images/VTLogo.png" class="vt-logo">
                <br> Feedback or Questions? Contact <a href="https://energytransition.coopercenter.org/profile/elizabeth-marshall">Elizabeth Marshall</a> at the Virginia Solar Intiative
                <br> Updated on June 30th, 2023
                <br> Created by Jaden Wang, Elizabeth Marshall, Katie Treene, Lucy Williams, and Dr. Ron Meyers
            </footer>
        `;
    }
}

class SwimLane extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="txt operational"> Operational Start Date </div>

            <div class="lane localities"> Localities </div>
            <div class="lane deq-lane"> DEQ </div>
            <div class="lane scc-lane"> SCC </div>
            <div class="lane federal"> Federal Reviews </div>

            <div class="line line-17"></div>
            <div class="line line-21"></div>
            <div class="line line-22"></div>
            <div class="arrow-head"> &#9658 </div>

            <abbrev-list></abbrev-list>

            <div class="btn btn-light reviews army-corps" data-bs-toggle="modal" data-bs-target="#army-corps-modal"> <b>United States Army Corps of Engineers</b> </div>
            <button type="button" class="btn btn-light btn-sm reviews btn-1" data-bs-toggle="modal" data-bs-target="#certification-modal">
              Clean Water Act, Section 401 Certification
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-2" data-bs-toggle="modal" data-bs-target="#section-permit-modal">
              Clean Water Act, Section 404 Permit
            </button>

            <div class="rbtn btn-light reviews fish-wildlife" data-bs-toggle="modal" data-bs-target="#fish-wildlife-modal"> <b>United States Fish and Wildlife Service</b> </div>
            <button type="button" class="btn btn-light btn-sm reviews btn-3" data-bs-toggle="modal" data-bs-target="#habitat-conservation-modal">
              Habitat Conservation Plan
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-4" data-bs-toggle="modal" data-bs-target="#new-incidental-modal">
              New Incidental Take Permit
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-5" data-bs-toggle="modal" data-bs-target="#renewal-permit-modal">
              Renewal or Amendment of an Existing Valid Incidental Take Permit
            </button>
            <button type="button" class="btn btn-light btn-sm reviews btn-6" data-bs-toggle="modal" data-bs-target="#transfer-permit-modal">
              Transfer, Partial Transfer, or Succession of an Existing Valid Incidental Take Permit
            </button>

            <army-corps>
                <div class="modal fade" id="army-corps-modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="abbrev-title"> United States Army Corps of Engineers </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                If the project is subject to any of the following requirements, the associated permit(s) must be obtained from the U.S. 
                                Army Corps of Engineers (USACE), with responsibility delegated to the VA DEQ. Further information on VA DEQ responsibilities can 
                                be found <a href="https://www.deq.virginia.gov/laws-regulations/water">here</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </army-corps>

            <div class="modal fade" id="section-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> Clean Water Act, Section 404 Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Section 404 of the <a href='https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404'>Clean Water Act</a> requires that projects which are in or affect navigable bodies of water obtain a Section 404 Permit before dredged or fill material may be discharged into waters of the U.S. In Virginia, local jursidction falls under the Virginia Water Protection (VWP) permit regulations.
                            <br> <br> According to the DEQ, "Authority to protect wetlands and streams and administer Virginia Water Protection (VWP) permit regulations is given by <a href='https://law.lis.virginia.gov/vacode/62.1-44.15:20/'>§62.1-44.15:20</a> of the Code of Virginia. The over-arching regulation for the VWP permit program is found in <a href=' https://law.lis.virginia.gov/admincode/title9/agency25/chapter210/'>9VAC25-210</a>.
                            <br> <br> The associated permit is issued under 22-SPGP-RCIR. Follow the <a href='https://ris.dls.virginia.gov/uploads/9VAC25/forms/33ffb005797~5t.pdf'>Joint Permit Application (JPA) Process</a>. The JPA is a single form used to apply for separate permits from the USACE, the VA DEQ, the Virginia Marine Resources Commission (VA MRC), and/or Local Wetlands Boards. Permitting purposes involve tidal and/or non-tidal water, tidal and/or non-tidal
                            wetlands, and/or dune/beach resources – including, but not limited to,
                            construction, dredging, filling, or excavation. Contact information can be found on the linked application materials.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="certification-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> Clean Water Act, Section 401 Certification </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            Section 401 of the <a href='https://www.epa.gov/cwa-401/overview-cwa-section-401-certification'>Clean Water Act (CWA)</a> provides states and authorized tribes with an important tool to help protect the water quality of federally regulated waters within their borders, in collaboration with federal agencies. Section 401 of the CWA requires that, for any federally licensed or permitted project that may result in a discharge into waters of the United States, a water quality certification be issued to ensure that the discharge complies with the applicable water quality requirements. In Virginia, local jursidction falls under the Virginia Water Protection (VWP) permit regulations. See the VA DEQ permitting process for further requirements and notices or public hearings.

                            <br><br>According to the DEQ, "Authority to protect wetlands and streams and administer Virginia Water Protection (VWP) permit regulations is given by <a href='https://law.lis.virginia.gov/vacode/62.1-44.15:20/'>§62.1-44.15:20</a> of the Code of Virginia. The over-arching regulation for the VWP permit program is found in <a href='https://law.lis.virginia.gov/admincode/title9/agency25/chapter210/'>9VAC25-210</a>".
                            
                            <br><br>The associated permit is issued under 22-SPGP-RCIR. Follow the <a href='https://ris.dls.virginia.gov/uploads/9VAC25/forms/33ffb005797~5t.pdf'>Joint Permit Application (JPA) Process</a>. Contact information can be found on the linked application materials. The JPA is a single form used to apply for separate permits from the USACE, the VA DEQ, the Virginia Marine Resources Commission (VA MRC), and/or Local Wetlands Boards. Permitting purposes involve tidal and/or non-tidal water, tidal and/or non-tidal
                            wetlands, and/or dune/beach resources – including, but not limited to,
                            construction, dredging, filling, or excavation. Contact information can be found on the linked application materials.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="fish-wildlife-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> United States Fish and Wildlife Service </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            If the project is subject to any of the following requirements, the associated permit(s) must be obtained from the U.S. Fish and Wildlife Service (Service), with responsibility delegated to the VA DEQ.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="transfer-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> Transfer, Partial Transfer, or Succession of an Existing Valid Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            When the ownership of a project changes, the new owner must obtain a transfer of an existing Incidental Take Permit. See the VA DEQ permitting process for permit requirements and notices or public hearings.

                            <br><br><b>Prerequisite Permit(s)</b>: New Incidental Take Permit 
                            
                            <br><b>Contact Name</b>: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator 
                            <br><b>Contact Emails</b>: permitsR5ES@fws.gov (<i>Federal</i>), susan.tripp@deq.virginia.gov (<i>State</i>)
                            <br><b>Permit Link</b>: See the VA DEQ for State Permit Process, <a href='https://fwsepermitstest.servicenowservices.com/fwsid=fws_kb_view&sys_id=adc55dfd1b1f50101f45dbdbe54bcbb5'>Federal Permit Process</a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="renewal-permit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> Renewal or Amendment of an Existing Valid Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            This permit will grant the renewal or amendment of an existing Incidental Take Permit. See the VA DEQ permitting process for permit requirements and notices or public hearings.

                            <br><br><b>Prerequisite Permit(s)</b>: New Incidental Take Permit 
                            
                            <br><b>Contact Name</b>: Susan Tripp, Small Renewable Energy PBR Program Guidance & Regulation Coordinator 
                            <br><b>Contact Emails</b>: permitsR5ES@fws.gov (<i>Federal</i>), susan.tripp@deq.virginia.gov (<i>State</i>)
                            <br><b>Permit Link</b>: See the VA DEQ for State Permit Process, <a href='https://fwsepermitstest.servicenowservices.com/fwsid=fws_kb_view&sys_id=adc55dfd1b1f50101f45dbdbe54bcbb5'>Federal Permit Process</a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="habitat-conservation-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> Habitat Conservation Plan </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            The Endangered Species Act provides for the protection of endangered and threatened species of wildlife and plants. When non-Federal parties plan to interact with ecosystems containing such species, it is required by <a href='https://www.fws.gov/laws/endangered-species-act/section-10'>Section 10(a)(2)(A)</a> of the Act to develop a Habitat Conservation Plan (HCP). HCPs must meet the permit issuance criteria of section <a href="https://www.fws.gov/laws/endangered-species-act/section-10">10(a)(2)(B)</a> of the Endangered Species Act. HCPs can also include conservation measures for vulnerable plant and animal species that are not listed federally as endangered or threatened.

                            <br><br> The habitat conservation plan associated with the permit ensures that the effects of the authorized incidental take are adequately minimized and mitigated.
                            
                            <br><br>According to the <a href='https://www.fws.gov/service/habitat-conservation-plans'>Service</a>:
                            "A Habitat Conservation Plan (HCP) is a planning document designed to accommodate economic development to the extent possible by authorizing the limited and unintentional take of listed species when it occurs incidental to otherwise lawful activities. The plan is designed not only to help landowners and communities but also to provide long-term benefits to species and their habitats. HCPs describe the anticipated effects of the proposed taking, how those impacts will be minimized or mitigated, and how the conservation measures included in the plan will be funded."
                            
                            <br><br> <i>Before drafting the HCP, it is strongly recommended to consult with the local field office of the Service to determine whether the HCP meets the respective policy and incidental take permit issuance criteria. Find your local field office <a href='https://www.fws.gov/our-facilities?state_name=%5B%22Virginia%22%5D'>here<a>. 
                            Check for existing HCPs that individual landowners can join – programmatic HCPs – before drafting your own. Programmatic HCPs are often county- or even region-wide.</i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="new-incidental-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="abbrev-title"> New Incidental Take Permit </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            An incidental take permit is required if otherwise lawful activities may unintentionally result in any "take" of endangered or threatened animal species. A completed Habitat Conservation Plan (HCP) must accompany any application for an incidental take permit. If the Service finds that an HCP meets the Endangered Species Act section <a href=’https://www.fws.gov/laws/endangered-species-act/section-10’>10(a)(1)(B)</a> incidental take permit issuance criteria, they will unlock the incidental take permit application. The applicant must then submit the completed incidental take permit (with the associated HCP) to the Service.

                            <br><br>See <a href=’https://www.fws.gov/service/habitat-conservation-plans’>here</a> for further information on HCPs and associated incidental take permits.
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

class Title extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <title> Solar Permit Map </title>
        `;
    }
}

class SisterAgencyModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="sister-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="abbrev-title"> Courtesy Sister Agency Process </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The following courtesy reviews are facilitated by the VA DEQ, coordinated with the applicant, and conducted by four state agencies. These reviews may identify issues that affect the site plan and the application for the General Construction Stormwater Permit (VPDES). 

                        <br><br> These four courtesy reviews are required to be completed prior to submitting the application for the General Construction Stormwater Permit (VPDES). Submit simultaneously with the SCC Authority to Construct and Operate an Electric Generating Facility (5MW-100MW). See
                        <a href='https://law.lis.virginia.gov/admincodefull/title20/agency5/chapter302/'>20VAC5-302-25, 11</a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dot-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="abbrev-title"> Department of Transportation, Traffic Impact Statement </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The VDOT Traffic Impact Statement (VTIS) assesses the impact of a proposed development on the transportation system and recommends improvements to lessen or negate those impacts. The permit requirements are as follows: 
                        The VTIS shall (i) identify any traffic issues associated with access from the site to the existing transportation network, (ii) outline solutions to potential problems, (iii) address the sufficiency of the future transportation 
                        network, and (iv) present improvements to be incorporated into the proposed development. The VDOT will accept a traffic analysis study prepared according to local requirements, as long as the VDOT certifies that the 
                        local requirements meet acceptable standards of professional practice. The VDOT will provide the locality with a written report contain key findings. If necessary, certain forms that are to be submitted can be found <a href='https://www.virginiadot.org/info/traffic_impact_analysis_regulations.asp'>here</a>.

                        <br><br> <b>Statutory Review Time Limits</b>: VDOT will respond to request for a scope of work meeting within 30 days of the request, and schedule a meeting to occur within 60 days of being contacted.
                        <br><br> <b>Notices/Public Hearings</b>: VDOT must make its comments available to the public through various means, e.g. through VDOT’s LandTrack system web page on the VDOT public website, copies at the local government offices, or a presentation to the locality.\

                        <br><br> The legislation regulating the guidelines for the VTIS is established in <a href='https://law.lis.virginia.gov/admincode/title24/agency30/chapter155/section60/'>24VAC30-155-60</a> of the Virginia Administrative Code. To get in touch with the VDOT and see further information on the VTIS, see <a href='https://www.virginiadot.org/info/traffic_impact_analysis_regulations.asp'>here<a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dhr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="abbrev-title"> Department of Historic Resources </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                    This is a review of any impacted historic sites. The DHR may provide comments to the DEQ for inclusion into their evaluation. It is important to note that the DHR application must be submitted no less than 30 days prior to the start date of the project.

                    <br><br>The establishment of this review requirement can be found at <a href='https://www.dhr.virginia.gov/federal-state-review/state-project-review/'>here</a>.
                    
                    <br><br>This is only required if the project will impact a historic site. This assessment should be coordinated with DWR as part of the natural resource impact assessment.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dcr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="abbrev-title"> Department of Conservation and Recreation </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        This is a courtesy review of the project’s environmental impact. The review may look at impact on biodiversity, habitat land, water table, and other factors. DCR may provide comments to DEQ for inclusion into their evaluation.

                        <br><br> The permit link can be found <a href="https://www.dcr.virginia.gov/natural-heritage/nhserviceform/">here</a>. For further inquiries, contact nhreview@dcr.virginia.gov.
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dwr-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="abbrev-title"> Department of Wildlife Resources, Solar Energy Facility Guidance </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        The DWR's Solar Energy Facility Guidance provides guidance for solar projects, such as project impact on natural resources, bald eagle nests, bats and bat habitat, wildlife passage fencing, vegetation considerations, and aquatic habitat. The DWR may provide comments to DEQ for inclusion into their evaluation.

                        <br><br>Information on the Solar Energy Facility Guidance can be found <a href='https://dwr.virginia.gov/wp-content/uploads/media/Solar-Energy-Facility-Guidance.pdf'>here</a>. For further inquiries, contact DWR's Manager of Wildlife Information and Environmental Services or DEQ's Renewable Energy PBR Coordinator.
                        
                        <br><br><i>These assessments should be submitted and completed before the construction permits and erosion permits. These assessments should also be coordinated with DCR to assess impacts to heritage resources.</i>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('nav-bar', NavBar);
customElements.define('swim-bar', SwimLaneNavBar);
customElements.define('abbrev-list', Abbrev);
customElements.define('footer-', Footer);
customElements.define('swim-lane', SwimLane);
customElements.define('title-', Title);
customElements.define('sister-agency', SisterAgencyModal);

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})