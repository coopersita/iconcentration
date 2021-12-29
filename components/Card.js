import { useState } from "react";

import ReactCardFlip from "react-card-flip";
import {
  DiReact,
  DiAndroid,
  DiApple,
  DiChrome,
  DiCoffeescript,
  DiFirefox,
  DiDrupal,
  DiGithubAlt,
  DiCss3,
  DiHtml5,
  DiGulp,
  DiIe,
  DiJavascript1,
  DiLinux,
  DiMozilla,
  DiPhp,
  DiNodejsSmall,
  DiProlog,
  DiRasberryPi,
  DiRedhat,
  DiRuby,
  DiSafari,
  DiSass,
  DiStackoverflow,
  DiSmashingMagazine,
  DiSwift,
  DiTrello,
  DiWindows,
  DiWordpress,
  DiYahooSmall,
  DiUbuntu,
  DiAngularSimple,
  DiBootstrap,
  DiCodeBadge,
  DiCodepen,
  DiCreativecommons,
  DiDreamweaver,
  DiGrunt,
  DiGoogleAnalytics,
  DiGoogleDrive,
  DiJava,
  DiJqueryLogo,
  DiMongodb,
  DiPerl,
  DiPostgresql,
  DiRor,
  DiUnitySmall,
  DiVisualstudio,
  DiW3C,
  DiMysql,
} from "react-icons/di";
import {
  GiAbstract030,
  Gi3DHammer,
  GiAbbotMeeple,
  GiAbstract004,
  GiAbstract007,
  GiAbstract010,
  GiAbstract014,
  GiAbstract016,
  GiAbstract018,
  GiAbstract020,
  GiAbstract021,
  GiAbstract023,
  GiAbstract034,
  GiAbstract035,
  GiAbstract037,
  GiAbstract039,
  GiAbstract040,
  GiAbstract042,
  GiAbstract045,
  GiAbstract046,
  GiAbstract051,
  GiAbstract052,
  GiAbstract053,
  GiAbstract054,
  GiAbstract055,
  GiAbstract060,
  GiAbstract064,
  GiAbstract065,
  GiAbstract067,
  GiAbstract068,
  GiAbstract090,
  GiAbstract107,
  GiAbstract113,
  GiAbstract116,
  GiAbstract120,
  GiAce,
  GiAerodynamicHarpoon,
  GiAcid,
  GiAlienBug,
  GiAgave,
  GiAlienStare,
  GiAmericanFootballBall,
  GiAries,
  GiArmorPunch,
  GiBadGnome,
  GiAztecCalendarSun,
  GiBarbarian,
  GiBat,
  GiBatMask,
  GiBearFace,
  GiEmptyChessboard,
} from "react-icons/gi";
import {
  GrBar,
  GrActions,
  GrAd,
  GrAdd,
  GrAed,
  GrAggregate,
  GrAlarm,
  GrAlert,
  GrAnalytics,
  GrAnchor,
  GrAnnounce,
  GrArchive,
  GrArticle,
  GrAssistListening,
  GrAttachment,
  GrAttraction,
  GrBarChart,
  GrBasket,
  GrBeacon,
  GrBike,
  GrBook,
  GrBrush,
  GrBug,
  GrBus,
  GrCafeteria,
  GrCalculator,
  GrCamera,
  GrCar,
  GrCart,
  GrChannel,
  GrChat,
  GrCirclePlay,
  GrClearOption,
  GrCloudUpload,
  GrCoatCheck,
  GrConfigure,
  GrCreditCard,
  GrEdit,
  GrFlag,
  GrGremlin,
  GrJava,
  GrMailOption,
  GrPerformance,
  GrTreeOption,
  GrYoga,
  GrWheelchairActive,
  GrValidate,
  GrTrophy,
  GrTroubleshoot,
  GrSun,
} from "react-icons/gr";

export default function Card(props) {
  const [isFlipped, setFlipped] = useState(false);

  const icons1 = [
    <DiReact key="DiReact" />,
    <DiAndroid key="DiAndroid" />,
    <DiApple key="DiApple" />,
    <DiChrome key="DiChrome" />,
    <DiCoffeescript key="DiCoffeescript" />,
    <DiFirefox key="DiFirefox" />,
    <DiDrupal key="DiDrupal" />,
    <DiGithubAlt key="DiGithubAlt" />,
    <DiCss3 key="DiCss3" />,
    <DiHtml5 key="DiHtml5" />,
    <DiGulp key="DiGulp" />,
    <DiIe key="DiIe" />,
    <DiJavascript1 key="DiJavascript1" />,
    <DiLinux key="DiLinux" />,
    <DiMozilla key="DiMozilla" />,
    <DiPhp key="DiPhp" />,
    <DiNodejsSmall key="DiNodejsSmall" />,
    <DiProlog key="DiProlog" />,
    <DiRasberryPi key="DiRasberryPi" />,
    <DiRedhat key="DiRedhat" />,
    <DiRuby key="DiRuby" />,
    <DiSafari key="DiSafari" />,
    <DiSass key="DiSass" />,
    <DiStackoverflow key="DiStackoverflow" />,
    <DiSmashingMagazine key="DiSmashingMagazine" />,
    <DiSwift key="DiSwift" />,
    <DiTrello key="DiTrello" />,
    <DiWindows key="DiWindows" />,
    <DiWordpress key="DiWordpress" />,
    <DiYahooSmall key="DiYahooSmall" />,
    <DiUbuntu key="DiUbuntu" />,
    <DiAngularSimple key="DiAngularSimple" />,
    <DiBootstrap key="DiBootstrap" />,
    <DiCodeBadge key="DiCodeBadge" />,
    <DiCodepen key="DiCodepen" />,
    <DiCreativecommons key="DiCreativecommons" />,
    <DiDreamweaver key="DiDreamweaver" />,
    <DiGrunt key="DiGrunt" />,
    <DiGoogleAnalytics key="DiGoogleAnalytics" />,
    <DiGoogleDrive key="DiGoogleDrive" />,
    <DiJava key="DiJava" />,
    <DiJqueryLogo key="DiJqueryLogo" />,
    <DiMongodb key="DiMongodb" />,
    <DiPerl key="DiPerl" />,
    <DiPostgresql key="DiPostgresql" />,
    <DiRor key="DiRor" />,
    <DiUnitySmall key="DiUnitySmall" />,
    <DiVisualstudio key="DiVisualstudio" />,
    <DiW3C key="DiW3C" />,
    <DiMysql key="DiMysql" />,
  ];

  const icons2 = [
    <GiAbstract030 key="GiAbstract030" />,
    <Gi3DHammer key="Gi3DHammer" />,
    <GiAbbotMeeple key="GiAbbotMeeple" />,
    <GiAbstract004 key="GiAbstract004" />,
    <GiAbstract007 key="GiAbstract007" />,
    <GiAbstract010 key="GiAbstract010" />,
    <GiAbstract014 key="GiAbstract014" />,
    <GiAbstract016 key="GiAbstract016" />,
    <GiAbstract018 key="GiAbstract018" />,
    <GiAbstract020 key="GiAbstract020" />,
    <GiAbstract021 key="GiAbstract021" />,
    <GiAbstract023 key="GiAbstract023" />,
    <GiAbstract034 key="GiAbstract034" />,
    <GiAbstract035 key="GiAbstract035" />,
    <GiAbstract037 key="GiAbstract037" />,
    <GiAbstract039 key="GiAbstract039" />,
    <GiAbstract040 key="GiAbstract040" />,
    <GiAbstract042 key="GiAbstract042" />,
    <GiAbstract045 key="GiAbstract045" />,
    <GiAbstract046 key="GiAbstract046" />,
    <GiAbstract051 key="GiAbstract051" />,
    <GiAbstract052 key="GiAbstract052" />,
    <GiAbstract053 key="GiAbstract053" />,
    <GiAbstract054 key="GiAbstract054" />,
    <GiAbstract055 key="GiAbstract055" />,
    <GiAbstract060 key="GiAbstract060" />,
    <GiAbstract064 key="GiAbstract064" />,
    <GiAbstract065 key="GiAbstract065" />,
    <GiAbstract067 key="GiAbstract067" />,
    <GiAbstract068 key="GiAbstract068" />,
    <GiAbstract090 key="GiAbstract090" />,
    <GiAbstract107 key="GiAbstract107" />,
    <GiAbstract113 key="GiAbstract113" />,
    <GiAbstract116 key="GiAbstract116" />,
    <GiAbstract120 key="GiAbstract120" />,
    <GiAce key="GiAce" />,
    <GiAerodynamicHarpoon key="GiAerodynamicHarpoon" />,
    <GiAcid key="GiAcid" />,
    <GiAlienBug key="GiAlienBug" />,
    <GiAgave key="GiAgave" />,
    <GiAlienStare key="GiAlienStare" />,
    <GiAmericanFootballBall key="GiAmericanFootballBall" />,
    <GiAries key="GiAries" />,
    <GiArmorPunch key="GiArmorPunch" />,
    <GiBadGnome key="GiBadGnome" />,
    <GiAztecCalendarSun key="GiAztecCalendarSun" />,
    <GiBarbarian key="GiBarbarian" />,
    <GiBat key="GiBat" />,
    <GiBatMask key="GiBatMask" />,
    <GiBearFace key="GiBearFace" />,
  ];

  const icons3 = [
    <GrBar key="GrBar" />,
    <GrActions key="GrActions" />,
    <GrAd key="GrAd" />,
    <GrAdd key="GrAdd" />,
    <GrAed key="GrAed" />,
    <GrAggregate key="GrAggregate" />,
    <GrAlarm key="GrAlarm" />,
    <GrAlert key="GrAlert" />,
    <GrAnalytics key="GrAnalytics" />,
    <GrAnchor key="GrAnchor" />,
    <GrAnnounce key="GrAnnounce" />,
    <GrArchive key="GrArchive" />,
    <GrArticle key="GrArticle" />,
    <GrAssistListening key="GrAssistListening" />,
    <GrAttachment key="GrAttachment" />,
    <GrAttraction key="GrAttraction" />,
    <GrBarChart key="GrBarChart" />,
    <GrBasket key="GrBasket" />,
    <GrBeacon key="GrBeacon" />,
    <GrBike key="GrBike" />,
    <GrBook key="GrBook" />,
    <GrBrush key="GrBrush" />,
    <GrBug key="GrBug" />,
    <GrBus key="GrBus" />,
    <GrCafeteria key="GrCafeteria" />,
    <GrCalculator key="GrCalculator" />,
    <GrCamera key="GrCamera" />,
    <GrCar key="GrCar" />,
    <GrCart key="GrCart" />,
    <GrChannel key="GrChannel" />,
    <GrChat key="GrChat" />,
    <GrCirclePlay key="GrCirclePlay" />,
    <GrClearOption key="GrClearOption" />,
    <GrCloudUpload key="GrCloudUpload" />,
    <GrCoatCheck key="GrCoatCheck" />,
    <GrConfigure key="GrConfigure" />,
    <GrCreditCard key="GrCreditCard" />,
    <GrEdit key="GrEdit" />,
    <GrFlag key="GrFlag" />,
    <GrGremlin key="GrGremlin" />,
    <GrJava key="GrJava" />,
    <GrMailOption key="GrMailOption" />,
    <GrPerformance key="GrPerformance" />,
    <GrTreeOption key="GrTreeOption" />,
    <GrYoga key="GrYoga" />,
    <GrWheelchairActive key="GrWheelchairActive" />,
    <GrValidate key="GrValidate" />,
    <GrTrophy key="GrTrophy" />,
    <GrTroubleshoot key="GrTroubleshoot" />,
    <GrSun key="GrSun" />,
  ];

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  let icon = null;

  switch (props.iconSet) {
    case 1:
      icon = icons1[props.index];
      break;
    case 2:
      icon = icons2[props.index];
      break;
    case 3:
      icon = icons3[props.index];
      break;
    default:
      icon = icons1[props.index];
      break;
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <button onClick={handleFlip}>
        <GiEmptyChessboard />
      </button>

      <button onClick={handleFlip}>{icon}</button>
    </ReactCardFlip>
  );
}