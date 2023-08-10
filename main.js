class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
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
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
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
            <div class="line line-18"></div>
            <div class="line line-19"></div>
            <div class="line line-20"></div>
            <div class="line line-21"></div>
            <div class="line line-22"></div>
            <div class="arrow-head"> &#9658 </div>

            <button type="button" class="btn btn-light abbrev cpcn-5-mw" data-bs-toggle="modal" data-bs-target="#abbrev-modal">
              Abbreviations
            </button>

            <abbrev-list></abbrev-list>

            <button type="button" class="btn btn-light btn-sm reviews army-corps" data-bs-toggle="modal" data-bs-target="#army-corps-modal">
              United States Army Corps of Engineers &#8594 401 Certification, Section 404
            </button>

            <button type="button" class="btn btn-light btn-sm reviews fish-wildlife" data-bs-toggle="modal" data-bs-target="#">
              United States Fish & Wildlife &#8594 New Incidental Take Permit & Supplementary Information for Renewal/Amendment of an Existing Valid Permit
            </button>

            <button type="button" class="btn btn-light btn-sm reviews species-act" data-bs-toggle="modal" data-bs-target="#">
              Habitat Conservation Plans under the Endangered Species Act
            </button>

            <div class="modal fade" id="army-corps-modal" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="abbrev-title">  401 Certification, Section 404 </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div class="modal-body">
                    <b> Agency</b>: Army Corp of Engineers <br>
                    <b> Agency Type</b>: Federal/State <br>
                    <br> Section 401 of the CWA provides states and authorized tribes with an important tool to help protect the water quality
                    of federally regulated waters within their borders, in collaboration with federal agencies. Section 401 of the CWA requires 
                    that, for any federally licensed or permitted project that may result in a discharge into waters of the United States, a 
                    water quality certification be issued to ensure that the discharge complies with applicable water quality requirements. <br>
                    <br> <b> Prerequisite Permits</b>: None <br>
                    <b> Permit Requirements</b>: Joint Permit Application Process <br>
                    <b> Contact Name</b>: Susan Tripp, Guidance & Regulation Coordinator <br>
                    <b> Contact Email</b>: susan.tripp@deq.virginia.gov<br>
                    <b> Notices/Public Hearings</b>: DEQ Process <br>
                    <b> Permit Link</b>: https://www.deq.virginia.gov/water/wetlands-streams <br>
                    <br>
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

customElements.define('nav-bar', NavBar);
customElements.define('swim-bar', SwimLaneNavBar);
customElements.define('abbrev-list', Abbrev);
customElements.define('footer-', Footer);
customElements.define('swim-lane', SwimLane);
customElements.define('title-', Title);

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})