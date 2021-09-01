import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      userRulePlusClassName: 'userRulePlusOff',
      userInfoPlusClassName: 'userInfoPlusOff',
      checked: false,
    };
  }

  headleChange = e => {
    this.setState({ checked: e.target.checked });
  };

  goToNext = () => {
    this.props.history.push('/SignUp2');
  };

  handleUserRulePlus = () => {
    if (this.state.userRulePlusClassName === 'userRulePlusOff') {
      this.setState({ userRulePlusClassName: 'userRulePlusOn' });
      return;
    } else {
      this.setState({ userRulePlusClassName: 'userRulePlusOff' });
      return;
    }
  };

  handleUserInfoPlus = () => {
    if (this.state.userInfoPlusClassName === 'userInfoPlusOff') {
      this.setState({ userInfoPlusClassName: 'userInfoPlusOn' });
      return;
    }
    if (this.state.userInfoPlusClassName === 'userInfoPlusOn') {
      this.setState({ userInfoPlusClassName: 'userInfoPlusOff' });
      return;
    }
  };

  render() {
    console.log(this.state.checkList);
    return (
      <div className="signUp">
        <div className="container">
          <div className="nav">회원가입</div>
          <div className="users">
            <div>
              <div className="user">#이용약관</div>
              <div className="user detail" onClick={this.handleUserRulePlus}>
                상세보기 +
              </div>
              <div className={this.state.userRulePlusClassName}>
                <div className="title">이용약관 & 개인정보보호정책</div>
                <div>
                  <p>
                    ㈜동일드방레는 라코스테 디지털 플래그십을 이용할 수 있는
                    온라인 통합 회원제를 홈페이지를 통하여 운영하고 있으며,
                    홈페이지는 2017년 3월 29일부터 기존 브랜드
                    홈페이지(www.lacoste.co.kr) 및 e-Shop(shop.lacoste.co.kr과
                    m-Shop(m.shop.lacoste.co.kr)이 www.lacoste.com/kr로
                    통합되었습니다.
                  </p>
                  <p>LACOSTE DIGITAL FLAGSHIP 온라인 회원약관</p>
                  ㈜동일드방레는 라코스테 디지털 플래그십을 이용할 수 있는
                  온라인 통합 회원제를 홈페이지를 통하여 운영하고 있으며,
                  홈페이지는 2017년 3월 29일부터 기존 브랜드
                  홈페이지(www.lacoste.co.kr) 및 e-Shop(shop.lacoste.co.kr과
                  m-Shop(m.shop.lacoste.co.kr)이 www.lacoste.com/kr로
                  통합되었습니다.
                  <p>
                    온/오프라인 통합 회원의 경우 온/오프라인 구매 시 적립 또는
                    발급 사용되는 쿠폰의 경우, 온라인에서는 회원 가입 절차 후
                    디지털 플래그십 내에서 확인하실 수 있으며 오프라인
                    매장에서는 생년월일을 통해 조회 하실 수 있습니다.
                    제1조(목적) 이 약관은 (주)동일드방레가 운영하는 라코스테
                    디지털 플래그십(이하 “온라인사이트”라한다)에서 제공하는
                    인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어
                    온라인사이트와 이용자의 권리•의무 및 책임 사항을 규정함을
                    목적으로 합니다.
                  </p>
                  <p>제2조(정의)</p>
                  <p>
                    ① "온라인사이트" 란 (주)동일드방레가 재화 또는 용역을
                    이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
                    재화 또는 용역을 거래할 수 있도록 설정한 온라인 상의 영업장
                    및 브랜드 관련 컨텐츠와 서비스를 제공하는 브랜드 홈페이지를
                    말하며, 아울러 온라인사이트를 운영하는 사업자의 의미로도
                    사용합니다.
                  </p>
                  <p>
                    ② "이용자"란 "온라인사이트"에 접속하여 이 약관에 따라
                    "온라인사이트"가 제공하는 서비스를 받는 회원 및 비회원을
                    말합니다.
                  </p>
                  <p>
                    ③ "회원"이라 함은 "온라인사이트"에 개인정보를 제공하여
                    회원등록을 한 자로서, "온라인사이트"의 정보를 지속적으로
                    제공받으며, "온라인사이트"이 제공하는 서비스를 계속적으로
                    이용할 수 있는 자를 말합니다.
                  </p>
                  <p>
                    ④ "비회원"이라 함은 회원에 가입하지 않고 "온라인사이트"에서
                    제공하는 서비스를 이용하는 자를 말합니다.
                  </p>
                  <p>제3조 (약관의 명시와 설명 및 개정)</p>
                  <p>
                    ① "온라인사이트"는 이 약관의 내용과 상호 및 대표자 성명,
                    영업소 소재지 주소, 사업자등록번호, 통신판매업신고번호,
                    개인정보 처리방침, 개인정보 보호책임자, 연락처(전화, 팩스,
                    전자우편 주소 등) 등을 이용자가 쉽게 알 수 있도록
                    "온라인사이트"의 초기서비스화면(전면)에 게시합니다. 다만,
                    약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수
                    있습니다.
                  </p>
                  <p>
                    ② "온라인사이트"는 이용자가 약관에 동의하기에 앞서 약관에
                    정하여져 있는 내용 중 청약철회, 배송책임, 환불 조건 등과
                    같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면
                    또는 팝업 화면 등을 제공하여 이용자의 확인을 구하여야
                    합니다.
                  </p>
                  <p>
                    ③ "온라인사이트"는 전자상거래 등에서의 소비자보호에 관한
                    법률, 약관의 규제에 관한 법률, 전자문서 및 전자거래 기본법,
                    전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률,
                    방문판매 등에 관한 법률, 소비자기본법 등 관련법을 위배하지
                    않는 범위에서 이 약관을 개정할 수 있습니다.
                  </p>
                  <p>
                    ④ "온라인사이트"가 약관을 개정할 경우에는 적용일자 및
                    개정사유를 명시하여 현행약관과 함께 "온라인사이트"의
                    초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지
                    공지합니다 다만, 이용자에게 불리하게 약관내용을 변경하는
                    경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.
                    이 경우 "온라인사이트"는 개정전 내용과 개정후 내용을
                    명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
                  </p>
                  <p>
                    ⑤ "온라인사이트"가 약관을 개정할 경우에는 달리 정함이 없는
                    한 그 개정약관은 그 시행일 이후부터 모든 이용자에게
                    일괄적으로 적용됩니다. 다만, 약관의 개정 전에 이미 발생된
                    권리의무에는 영향을 미치지 않습니다. 또한 이미 계약을 체결한
                    이용자가 개정 전 약관 조항의 적용을 받기를 원하는 뜻을
                    제3항에 의한 개정약관의 공지기간 내에 "온라인사이트"에
                    통지하는 경우에는 개정 전 약관 조항이 적용됩니다.
                  </p>
                  <p>
                    ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
                    전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에
                    관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의
                    소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="user">#개인정보수집/이용</div>
              <div className="user detail" onClick={this.handleUserInfoPlus}>
                상세보기 +
              </div>
              <div className={this.state.userInfoPlusClassName}>
                <div className="title">개인정보 처리방침</div>
                <div>
                  <p>
                    1. 수집하는 개인정보 항목 및 수집방법 (주)동일드방레는
                    다음과 같은 개인정보를 수집하고 있습니다.
                  </p>
                  <p>
                    · 필수사항 : 성명, 회원ID, 비밀번호, 생년월일, 주소,
                    연락처(휴대폰번호), e-Mail주소, 포인트 내역, 구매
                    내역(오프라인 회원의 경우에는 성별, 등록매장, 리테일 프로 ID
                    포함), 암호화된 동일인 식별정보 (CI)
                  </p>
                  <p>
                    · 선택사항 : 유선 전화번호(오프라인 회원의 경우에는 직업,
                    고객 상담과정에서 확인되는 기타 정보 포함)
                  </p>
                  <p>
                    · 단, 고객의 기본적 인권을 현저하게 침해할 우려가 있는
                    개인정보(인종, 민족, 사상, 신조, 출신지, 본적지, 정치적
                    성향, 범죄기록, 건강상태 및 성생활 등)는 수집하지 않습니다.
                    또한, 서비스 이용과정이나 처리과정에서 다음과 같은 정보들이
                    생성되어 수집될 수 있습니다.
                  </p>
                  <p>
                    · 서비스 이용기록, 접속로그, 쿠키, 접속IP정보, 멤버십
                    카드번호
                  </p>
                  <p>
                    가. (주)동일드방레는 다음과 같은 방법으로 개인정보를
                    수집합니다.
                  </p>
                  <p>
                    나. 개인정보 수집방법 홈페이지, 서면양식, 팩스, 전화,
                    e-Mail, 이벤트 응모
                  </p>
                  <p>
                    2. 개인정보의 수집 및 이용목적 (주)동일드방레는 수집한
                    개인정보를 다음의 목적을 위해 활용합니다.
                  </p>
                  <p>
                    가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른
                    요금정산, 콘텐츠 제공, 물품(상품 또는 경품)배송 또는 청구서
                    등 발송, 금융거래, 본인인증, 구매 및 대금결제, 요금추심 등
                    정보안내
                  </p>
                  <p>나. 서비스 제공에 있어서 고객에게 맞춤화된 서비스 제공</p>
                  <p>
                    다. 회원관리 (회원가입을 하는 경우에 한함) 회원제 서비스
                    이용에 따른 본인확인, 불량회원의 부정이용 방지와 비인가
                    사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 만14세 미만
                    아동 개인정보 수집 시 법정대리인 동의여부 확인, 추후
                    법정대리인 본인확인, 분쟁조정을 위한 기록보존, 불만처리 등
                    민원처리, 고지사항 전달
                  </p>
                  <p>라. 상담요청에 대한 회신</p>
                  <p>
                    마. 마케팅 및 광고에 활용 신규서비스(제품) 개발 및 특화,
                    인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도
                    파악, 회원의 서비스 이용에 대한 통계, 새로운 서비스 안내,
                    신상품이나 이벤트 정보안내 등 광고성 정보 전달 이벤트,
                    신제품 출시, 쿠폰, 세일 및 광고성 뉴스레터/SMS 발송, 소셜
                    미디어 회원 타겟팅 광고 등 일체의 마케팅 활동에 있어 회원의
                    성명,주소,이메일 및 휴대전화번호를 활용합니다.
                  </p>
                  <p>
                    바. 마케팅 및 광고에 활용되는 개인정보 보유기간 수신동의
                    철회 접수 및 회원탈퇴 시 까지
                  </p>
                  <p>3. 개인정보의 제공 및 공유 </p>
                  <p>
                    가. (주)동일드방레는 고객의 사전 동의가 있거나 법률에서
                    정하는 경우 외에는 고객의 개인정보를 제3자에게 제공하거나
                  </p>
                  <p>
                    2. "개인정보의 수집 및 이용목적"에서 고지한 목적 외의 용도로
                    이용하지 않습니다.
                  </p>
                  <p>
                    나. 개인정보를 제공할 경우에는 사전에 고객에게 개인정보를
                    제공받는 제3자, 제공하는 개인정보항목명, 개인정보 제공의
                    목적, 제공하는 개인정보가 언제까지 어떻게 보호, 관리되는지,
                    고객이 종전에 동의한 사항, 고객의 동의하지 않을 권리와
                    의사표시 방법, 기타 고객의 동의를 얻기 위하여 필요한 사항에
                    대해 개별적으로 서면, 전자우편, 전화 등을 통해 고지하여
                    동의를 구하는 절차를 거치게 되며, 고객이 동의하지 않는
                    경우에는 제3자에게 정보를 제공하지 않습니다.
                  </p>
                  <p>
                    4. 개인정보의 취급위탁 (주)동일드방레는 서비스 향상을 위해서
                    고객의 개인정보를 외부전문업체에 위탁하여 처리할 수
                    있습니다. 가. 개인정보의 처리를 위탁하는 경우에는 관계법령에
                    따라 필요한 경우 그 사실을 고객에게 고지하고 동의를 받도록
                    하겠습니다.
                  </p>
                  <p>
                    나. 개인정보의 처리를 위탁하는 경우에는 위탁계약 등을 통하여
                    위탁업무의 목적 및 범위, 개인정보에 대한 기술적∙관리적
                    보호조치, 서비스제공자의 개인정보보호 관련 지시엄수 등
                    서비스제공자에 대한 감독, 개인정보에 관한 비밀유지, 제3자
                    제공 및 위탁목적 외 처리의 금지 및 사고시의 책임부담 등을
                    명확히 규정하고 당해 계약내용을 서면 또는 전자적으로
                    보관하겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="useragreement">
            <div className="check">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.headleChange}
                id="1"
              />
              이용약관에 동의합니다 (필수)
            </div>
            <div className="check">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.headleChange}
                id="2"
              />
              개인정보 수집/이용에 동의합니다 (필수)
            </div>
            <div className="check">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.headleChange}
              />
              개인정보 취급 위탁동의 (구매 및 배송 등 관련) (필수)
            </div>
            <div className="check">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.headleChange}
              />
              개인정보 국외이전에 대한 동의 (필수)
            </div>
            <div className="check">
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.headleChange}
              />
              마케팅 활용 개인정보 수집/이용 동의합니다 (선택)
            </div>
          </div>
          <table>
            <th>개인정보 수집 이용 목적</th>
            <th>수집하려는 개인 정보</th>
            <th>개인정보 보유, 이용기간</th>
            <tr>
              <td>
                이벤트, 신제품 출시, 쿠폰, 세일 및 광고성 뉴스레터/SMS 발송,
                소셜 미디어 회원 타겟팅 광고 등 일체의 마케팅 활동
              </td>
              <td>성명, 주소, 이메일 및 휴대전화번호</td>
              <td>수신동의 철회 접수 및 회원탈퇴 시 까지</td>
            </tr>
          </table>
          <button className="nextBnt" onClick={this.goToNext}>
            계속
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
