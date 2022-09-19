(function( $ ) {

    $('.caroussel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true
            }
            }
    ]});

})( jQuery );

$(document).ready(function() {
// for kit mail and such gets the parameter from the url and auto-fill the fields
var queryParamFieldIdMap = {
        user_email: 'lead[email]',
        first_name: 'lead[name]',
        lastname: 'lead[Lastname]',
    };

    Object.keys(queryParamFieldIdMap).forEach(function (queryParam) {
        console.log(queryParam);
        let searchParams = new URLSearchParams(window.location.search)
        var queryParamExist = searchParams.has(queryParam);
        
        if(queryParamExist){
        var queryParamValue=searchParams.get(queryParam)
        $('input[name="' + queryParamFieldIdMap[queryParam] + '"]').val(queryParamValue).trigger('change');
        }
    });    
  //insert the shorten url in the url collected field to avoid the VARCHAR limit of some of the client db
  //and facilitating the making of stats per competition
var url  = window.location.href;
var shortUrl= url.split('?')[0];
    $("#lead_url").val(shortUrl).trigger("change")
    
});

//get the zipocode and associated the provincia corresponding to it

$("#lead_zip").on("change", function (){
var capVAl=$("#lead_zip").val(); 
    if( capVAl.startsWith("110") || capVAl.startsWith("111") ){
        $("#lead_region").val("AO").trigger("change")
        };
    if( capVAl.startsWith("150") || capVAl.startsWith("151") ){
            $("#lead_region").val("AL").trigger("change")
        };
    if( capVAl.startsWith("140") || capVAl.startsWith("141") ){
            $("#lead_region").val("AT").trigger("change")
        };
    if( capVAl.startsWith("138") || capVAl.startsWith("139") ){
            $("#lead_region").val("BI").trigger("change")
        };
    if( capVAl.startsWith("18025") || capVAl.startsWith("120") || capVAl.startsWith("121") ){
            $("#lead_region").val("CN").trigger("change")
        };
    if( capVAl.startsWith("280") || capVAl.startsWith("281") ){
            $("#lead_region").val("NO").trigger("change")
        };
    if( capVAl.startsWith("100") || capVAl.startsWith("101") ){
            $("#lead_region").val("TO").trigger("change")
        };
    if( capVAl.startsWith("288") || capVAl.startsWith("289") ){
        $("#lead_region").val("VB").trigger("change")
        };
    if( capVAl.startsWith("130") || capVAl.startsWith("131") ){
            $("#lead_region").val("VC").trigger("change")
        };
    if( capVAl.startsWith("160") || capVAl.startsWith("161") ){
            $("#lead_region").val("GE").trigger("change")
        };
    if( capVAl.startsWith("180") || capVAl.startsWith("181") ){
            $("#lead_region").val("IM").trigger("change")
        };
    if( capVAl.startsWith("190") || capVAl.startsWith("191") ){
            $("#lead_region").val("SP").trigger("change")
        };
    if( capVAl.startsWith("12071") || capVAl.startsWith("170") || capVAl.startsWith("171") ){
            $("#lead_region").val("SV").trigger("change")
        };
    if( capVAl.startsWith("240") || capVAl.startsWith("241") ){
            $("#lead_region").val("BG").trigger("change")
        };
    if( capVAl.startsWith("250") || capVAl.startsWith("251") ){
        $("#lead_region").val("BS").trigger("change")
        };
    if( capVAl.startsWith("220") || capVAl.startsWith("221") ){
            $("#lead_region").val("CO").trigger("change")
        };
    if( capVAl.startsWith("260") || capVAl.startsWith("261") ){
            $("#lead_region").val("CR").trigger("change")
        };
    if( capVAl.startsWith("238") || capVAl.startsWith("239") ){
            $("#lead_region").val("LC").trigger("change")
        };
    if( capVAl.startsWith("268") || capVAl.startsWith("269") ){
            $("#lead_region").val("LO").trigger("change")
        };
    if( capVAl.startsWith("460") || capVAl.startsWith("461") ){
            $("#lead_region").val("MN").trigger("change")
        };
    if( capVAl.startsWith("200") || capVAl.startsWith("201") ){
            $("#lead_region").val("MI").trigger("change")
        };
    if( capVAl.startsWith("208") || capVAl.startsWith("209") ){
        $("#lead_region").val("MB").trigger("change")
        };
    if( capVAl.startsWith("270") || capVAl.startsWith("271") ){
            $("#lead_region").val("PV").trigger("change")
        };
    if( capVAl.startsWith("230") || capVAl.startsWith("231") ){
            $("#lead_region").val("SO").trigger("change")
        };
    if( capVAl.startsWith("210") || capVAl.startsWith("211") ){
            $("#lead_region").val("VA").trigger("change")
        };
    if( capVAl.startsWith("390") || capVAl.startsWith("391") ){
            $("#lead_region").val("BZ").trigger("change")
        };
    if( capVAl.startsWith("380") || capVAl.startsWith("381") ){
            $("#lead_region").val("TN").trigger("change")
        };
    if( capVAl.startsWith("320") || capVAl.startsWith("321") ){
            $("#lead_region").val("BL").trigger("change")
        };
    if( capVAl.startsWith("350") || capVAl.startsWith("351") ){
        $("#lead_region").val("PD").trigger("change")
        };
    if( capVAl.startsWith("450") || capVAl.startsWith("451") ){
            $("#lead_region").val("RO").trigger("change")
        };
    if( capVAl.startsWith("310") || capVAl.startsWith("311") ){
            $("#lead_region").val("TV").trigger("change")
        };
    if( capVAl.startsWith("300") || capVAl.startsWith("301") ){
            $("#lead_region").val("VE").trigger("change")
        };
    if( capVAl.startsWith("370") || capVAl.startsWith("371") ){
            $("#lead_region").val("VR").trigger("change")
        };
    if( capVAl.startsWith("360") || capVAl.startsWith("361") ){
            $("#lead_region").val("VI").trigger("change")
        };
    if( capVAl.startsWith("3407") || capVAl.startsWith("3417") ){
            $("#lead_region").val("GO").trigger("change")
        };
    if( capVAl.startsWith("3307") || capVAl.startsWith("3317") ){
        $("#lead_region").val("PN").trigger("change")
        };
    if( capVAl.startsWith("340") || capVAl.startsWith("341") ){
            $("#lead_region").val("TS").trigger("change")
        };
    if( capVAl.startsWith("330") || capVAl.startsWith("331") ){
            $("#lead_region").val("UD").trigger("change")
        };
    if( capVAl.startsWith("400") || capVAl.startsWith("401") ){
            $("#lead_region").val("BO").trigger("change")
        };
    if( capVAl.startsWith("440") || capVAl.startsWith("441") ){
            $("#lead_region").val("FE").trigger("change")
        };
    if( capVAl.startsWith("470") || capVAl.startsWith("471") || capVAl.startsWith("475") ){
            $("#lead_region").val("FC").trigger("change")
        };
    if( capVAl.startsWith("410") || capVAl.startsWith("411") ){
            $("#lead_region").val("MO").trigger("change")
        };
    if( capVAl.startsWith("430") || capVAl.startsWith("431") ){
            $("#lead_region").val("PR").trigger("change")
        };
    if( capVAl.startsWith("110") || capVAl.startsWith("111") ){
            $("#lead_region").val("AO").trigger("change")
        };

    if( capVAl.startsWith("290") || capVAl.startsWith("291") ){
            $("#lead_region").val("PC").trigger("change")
        };

    if( capVAl.startsWith("480") || capVAl.startsWith("481") ){
            $("#lead_region").val("RA").trigger("change")
        };

        if( capVAl.startsWith("420") || capVAl.startsWith("421") ){
            $("#lead_region").val("RE").trigger("change")
        };
        if( capVAl.startsWith("478") || capVAl.startsWith("479") ){
            $("#lead_region").val("RN").trigger("change")
        };

        if( capVAl.startsWith("520") || capVAl.startsWith("521") ){
            $("#lead_region").val("AR").trigger("change")
        };

        if( capVAl.startsWith("500") || capVAl.startsWith("501") ){
            $("#lead_region").val("FI").trigger("change")
        };

        if( capVAl.startsWith("580") || capVAl.startsWith("581") ){
            $("#lead_region").val("GR").trigger("change")
        };

        if( capVAl.startsWith("570") || capVAl.startsWith("571") ){
            $("#lead_region").val("LI").trigger("change")
        };

        if( capVAl.startsWith("550") || capVAl.startsWith("551") ){
            $("#lead_region").val("LU").trigger("change")
        };

        if( capVAl.startsWith("540") || capVAl.startsWith("541") ){
            $("#lead_region").val("MS").trigger("change")
        };

        if( capVAl.startsWith("560") || capVAl.startsWith("561") ){
            $("#lead_region").val("PI").trigger("change")
        };

        if( capVAl.startsWith("510") || capVAl.startsWith("511") ){
            $("#lead_region").val("PT").trigger("change")
        };

        if( capVAl.startsWith("590") || capVAl.startsWith("591") ){
            $("#lead_region").val("PO").trigger("change")
        };

        if( capVAl.startsWith("530") || capVAl.startsWith("531") ){
            $("#lead_region").val("SI").trigger("change")
        };

        if( capVAl.startsWith("600") || capVAl.startsWith("601") ){
            $("#lead_region").val("AN").trigger("change")
        };

        if( capVAl.startsWith("630") || capVAl.startsWith("631") ){
            $("#lead_region").val("AP").trigger("change")
        };

        if( capVAl.startsWith("638") || capVAl.startsWith("639") ){
            $("#lead_region").val("FM").trigger("change")
        };

        if( capVAl.startsWith("620") || capVAl.startsWith("621") ){
            $("#lead_region").val("MC").trigger("change")
        };

        if( capVAl.startsWith("610") || capVAl.startsWith("611") ){
            $("#lead_region").val("PU").trigger("change")
        };

        if( capVAl.startsWith("060") || capVAl.startsWith("061") ){
            $("#lead_region").val("PG").trigger("change")
        };

        if( capVAl.startsWith("050") || capVAl.startsWith("051") ){
            $("#lead_region").val("TR").trigger("change")
        };

        if( capVAl.startsWith("030") || capVAl.startsWith("031") ){
            $("#lead_region").val("FR").trigger("change")
        };

        if( capVAl.startsWith("040") || capVAl.startsWith("041") ){
            $("#lead_region").val("LT").trigger("change")
        };

        if( capVAl.startsWith("020") || capVAl.startsWith("021") ){
            $("#lead_region").val("RI").trigger("change")
        };

        if( capVAl.startsWith("000") || capVAl.startsWith("001") ){
            $("#lead_region").val("RM").trigger("change")
        };

        if( capVAl.startsWith("010") || capVAl.startsWith("011") ){
            $("#lead_region").val("VT").trigger("change")
        };

        if( capVAl.startsWith("660") || capVAl.startsWith("661") ){
            $("#lead_region").val("CH").trigger("change")
        };

        if( capVAl.startsWith("670") || capVAl.startsWith("671") ){
            $("#lead_region").val("AQ").trigger("change")
        };

        if( capVAl.startsWith("650") || capVAl.startsWith("651") ){
            $("#lead_region").val("PE").trigger("change")
        };

        if( capVAl.startsWith("640") || capVAl.startsWith("641") ){
            $("#lead_region").val("TE").trigger("change")
        };

        if( capVAl.startsWith("8601") || capVAl.startsWith("8602") || capVAl.startsWith("8603") || capVAl.startsWith("8604") || capVAl.startsWith("8610") ){
            $("#lead_region").val("CB").trigger("change")
        };

        if( capVAl.startsWith("8607") || capVAl.startsWith("8608") || capVAl.startsWith("8609") || capVAl.startsWith("8617") ){
            $("#lead_region").val("IS").trigger("change")
        };

        if( capVAl.startsWith("830") || capVAl.startsWith("831") ){
            $("#lead_region").val("AV").trigger("change")
        };

        if( capVAl.startsWith("820") || capVAl.startsWith("821") ){
            $("#lead_region").val("BN").trigger("change")
        };

        if( capVAl.startsWith("810") || capVAl.startsWith("811") ){
            $("#lead_region").val("CE").trigger("change")
        };

        if( capVAl.startsWith("800") || capVAl.startsWith("801") ){
            $("#lead_region").val("NA").trigger("change")
        };

        if( capVAl.startsWith("840") || capVAl.startsWith("841") ){
            $("#lead_region").val("SA").trigger("change")
        };

        if( capVAl.startsWith("700") || capVAl.startsWith("701") ){
            $("#lead_region").val("BA").trigger("change")
        };

        if( capVAl.startsWith("760") || capVAl.startsWith("761") ){
            $("#lead_region").val("BT").trigger("change")
        };

        if( capVAl.startsWith("720") || capVAl.startsWith("721") ){
            $("#lead_region").val("BR").trigger("change")
        };
        if( capVAl.startsWith("710") || capVAl.startsWith("711") ){
            $("#lead_region").val("FG").trigger("change")
        };
        if( capVAl.startsWith("730") || capVAl.startsWith("731") ){
            $("#lead_region").val("LE").trigger("change")
        };
        if( capVAl.startsWith("740") || capVAl.startsWith("741") ){
            $("#lead_region").val("TA").trigger("change")
        };
        if( capVAl.startsWith("750") || capVAl.startsWith("751") ){
            $("#lead_region").val("MT").trigger("change")
        };
        if( capVAl.startsWith("850") || capVAl.startsWith("851") ){
            $("#lead_region").val("PZ").trigger("change")
        };
        if( capVAl.startsWith("880") || capVAl.startsWith("881") ){
            $("#lead_region").val("CZ").trigger("change")
        };
        if( capVAl.startsWith("870") || capVAl.startsWith("871") ){
            $("#lead_region").val("CS").trigger("change")
        };
        if( capVAl.startsWith("888") || capVAl.startsWith("889") ){
            $("#lead_region").val("KR").trigger("change")
        };
        if( capVAl.startsWith("890") || capVAl.startsWith("891") ){
            $("#lead_region").val("RC").trigger("change")
        };
        if( capVAl.startsWith("898") || capVAl.startsWith("899") ){
            $("#lead_region").val("VV").trigger("change")
        };
        if( capVAl.startsWith("920") || capVAl.startsWith("921") ){
            $("#lead_region").val("AG").trigger("change")
        };
        if( capVAl.startsWith("930") || capVAl.startsWith("931") ){
            $("#lead_region").val("CL").trigger("change")
        };
        if( capVAl.startsWith("950") || capVAl.startsWith("951") ){
            $("#lead_region").val("CT").trigger("change")
        };
        if( capVAl.startsWith("940") || capVAl.startsWith("941") ){
            $("#lead_region").val("EN").trigger("change")
        };
        if( capVAl.startsWith("980") || capVAl.startsWith("981") ){
            $("#lead_region").val("ME").trigger("change")
        };
        if( capVAl.startsWith("900") || capVAl.startsWith("901") ){
            $("#lead_region").val("PA").trigger("change")
        };
        if( capVAl.startsWith("970") || capVAl.startsWith("971") ){
            $("#lead_region").val("RG").trigger("change")
        };
        if( capVAl.startsWith("960") || capVAl.startsWith("961") ){
            $("#lead_region").val("SR")
        };
        if( capVAl.startsWith("910") || capVAl.startsWith("911") ){
            $("#lead_region").val("TP").trigger("change")
        };

        if( capVAl.startsWith("080") || capVAl.startsWith("081") ){
            $("#lead_region").val("NU").trigger("change")
        };
        if( capVAl.startsWith("0907") || capVAl.startsWith("0917") ){
            $("#lead_region").val("OR").trigger("change")
        };
        if( capVAl.startsWith("070") || capVAl.startsWith("071") ){
            $("#lead_region").val("SS").trigger("change")
        };
        if( capVAl.startsWith("0901") || capVAl.startsWith("0902") || capVAl.startsWith("0903") || capVAl.startsWith("0904") || capVAl.startsWith("0905") || capVAl.startsWith("0906") ){
            $("#lead_region").val("SU").trigger("change")
        };
        //more complex code because the zip in sardinia is a mess!!
                    if( capVAl.startsWith("09032") || capVAl.startsWith("09121") || capVAl.startsWith("09134") || capVAl.startsWith("09012") || capVAl.startsWith("09033") || capVAl.startsWith("09067") || capVAl.startsWith("09069") || capVAl.startsWith("09069") || capVAl.startsWith("09042") || capVAl.startsWith("09050") || capVAl.startsWith("09044") || capVAl.startsWith("09018") || capVAl.startsWith("09047") || capVAl.startsWith("09028") || capVAl.startsWith("09048") || capVAl.startsWith("09068") || capVAl.startsWith("09050")){
            $("#lead_region").val("CA").trigger("change")
        };

});
