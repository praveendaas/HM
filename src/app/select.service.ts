import { Injectable } from '@angular/core';
import { Country } from './payment/country';
import { State } from './payment/state';

@Injectable()
export class SelectService {

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'UAE' ),
     new Country(4, 'SriLanka' ),
     new Country(5, 'Pakistan' ),
     new Country(6, 'Singapore' ),
     new Country(7, 'Malaysia' ),
    ];
  }
  
  getStates() {
   return [
    new State(1, 1, 'Alabama' ),
    new State(2, 1, 'Alaska' ),
    new State(3, 1, 'Arizona ' ),
    new State(4, 1, 'Arkansas' ),
    new State(5, 1, 'California' ),
    new State(6, 1, 'Colorado ' ),
    new State(7, 1, 'Connecticut ' ),
    new State(8, 1, 'Delaware ' ),
    new State(9, 1, 'Florida ' ),
    new State(10, 1, 'Georgia' ),
    new State(11, 1, 'Hawaii ' ),
    new State(12, 1, 'Idaho' ),
    new State(13, 1, 'Illinois ' ),
    new State(14, 1, 'Indiana ' ),
    new State(15, 1, 'Iowa ' ),
    new State(16, 1, 'Kansas' ),
    new State(17, 1, 'Kentucky ' ),
    new State(18, 1, 'Louisiana ' ),
    new State(19, 1, 'Maine' ),
    new State(20, 1, 'Maryland ' ),
    new State(21, 1, 'Massachusetts ' ),
    new State(22, 1, 'Michigan ' ),
    new State(23, 1, 'Minnesota ' ),
    new State(24, 1, 'Mississippi ' ),
    new State(25, 1, 'Missouri ' ),
    new State(26, 1, 'Montana' ),
    new State(27, 1, 'Nebraska' ),
    new State(28, 1, 'Nevada ' ),
    new State(29, 1, 'New Hampshire' ),
    new State(30, 1, 'New Jersey ' ),
    new State(31, 1, 'New Mexico' ),
    new State(32, 1, 'New York' ),
    new State(33, 1, 'North Carolina' ),
    new State(34, 1, 'North Dakota' ),
    new State(35, 1, 'Ohio ' ),
    new State(36, 1, 'Oklahoma ' ),
    new State(37, 1, 'Oregon ' ),
    new State(38, 1, 'Pennsylvania ' ),
    new State(39, 1, 'Rhode Island' ),
    new State(40, 1, 'South Carolina' ),
    new State(41, 1, 'South Dakota' ),
    new State(42,1, 'Tennessee' ),
    new State(43, 1, 'Texas' ),
    new State(44, 1, 'Utah ' ),
    new State(45, 1, 'Vermont ' ),
    new State(46, 1, 'Virginia ' ),
    new State(47, 1, 'Washington ' ),
    new State(48, 1, 'West Virginia' ),
    new State(49, 1, 'Wisconsin ' ),
    new State(50, 1, 'Wyoming ' ),
     new State(51, 2, 'Abu Dhabi' ),
     new State(52, 2, 'Ajman'),
     new State(53, 2, 'Dubai' ),
     new State(54, 2, 'Fujairah' ),
     new State(55, 2, 'Ras Al Khaimah' ),
     new State(56, 2, 'Sharjah' ),
     new State(57, 2, 'Umm Al Quwain' ),
     new State(58, 3, 'Aberconwy and Colwyn' ),
     new State(59, 3, 'Aberdeen' ),
     new State(60, 3, 'Aberdeenshire' ),
     new State(61, 3, 'Anglesey' ),
     new State(62, 3, 'Angus' ),
     new State(63, 3, 'Antrim' ),
     new State(64, 3, 'Argyll and Bute' ),
     new State(65, 3, 'Armagh' ),
     new State(66, 3, 'Avon' ),
     new State(67, 3, 'Ayrshire' ),
     new State(68, 3, 'Bath and NE Somerset' ),
     new State(69, 3, 'Bedfordshire' ),
     new State(70, 3, 'Belfast' ),
     new State(71, 3, 'Berkshire' ),
     new State(72, 3, 'Berwickshire' ),
     new State(73, 3, 'BFPO' ),
     new State(74, 3, 'Blaenau Gwent' ),
     new State(75, 3, 'Buckinghamshire' ),
     new State(76, 3, 'Caernarfonshire' ),
     new State(77, 3, 'Caerphilly' ),
     new State(78, 3, 'Caithness' ),
     new State(79, 3, 'Cambridgeshire' ),
     new State(80, 3, 'Cardiff' ),
     new State(81, 3, 'Cardiganshire' ),
     new State(82, 3, 'Carmarthenshire' ),
     new State(83, 3, 'Ceredigion' ),
     new State(84, 3, 'Channel Islands' ),
     new State(85, 3, 'Cheshire' ),
     new State(86, 3, 'City of Bristol' ),
     new State(87, 3, 'Clackmannanshire' ),
     new State(88, 3, 'Clwyd' ),
     new State(89, 3, 'Conwy' ),
     new State(90, 3, 'Cornwall/Scilly' ),
     new State(91, 3, 'Cumbria' ),
     new State(92, 3, 'Denbighshire' ),
     new State(93, 3, 'Derbyshire' ),
     new State(94, 3, 'Derry/Londonderry' ),
     new State(95, 3, 'Devon' ),
     new State(96, 3, 'Dorset' ),
     new State(97, 3, 'Down' ),
     new State(98, 3, 'Dumfries and Galloway' ),
     new State(99, 3, 'Dunbartonshire' ),
     new State(100, 3, 'Dundee' ),
     new State(101, 3, 'Durham' ),
     new State(102, 3, 'Dyfed' ),
     new State(103, 3, 'East Ayrshire' ),
     new State(104, 3, 'East Dunbartonshire' ),
     new State(105, 3, 'East Lothian' ),
     new State(106, 3, 'East Renfrewshire' ),
     new State(107, 3, 'East Riding Yorkshire' ),
     new State(108, 3, 'East Sussex' ),
     new State(109, 3, 'Edinburgh' ),
     new State(110, 3, 'England' ),
     new State(111, 3, 'Essex' ),
     new State(112, 3, 'Falkirk' ),
     new State(113, 3, 'Fermanagh' ),
     new State(114, 3, 'Fife' ),
     new State(115, 3, 'Flintshire' ),
     new State(116, 3, 'Glasgow' ),
     new State(117, 3, 'Gloucestershire' ),
     new State(118, 3, 'Greater London' ),
     new State(119, 3, 'Greater Manchester' ),
     new State(120, 3, 'Gwent' ),
     new State(121, 3, 'Gwynedd' ),
     new State(122, 3, 'Hampshire' ),
     new State(123, 3, 'Hartlepool' ),
     new State(124, 3, 'Hereford and Worcester' ),
     new State(125, 3, 'Hertfordshire' ),
     new State(126, 3, 'Highlands' ),
     new State(127, 3, 'Inverclyde' ),
     new State(128, 3, 'Inverness-Shire' ),
     new State(129, 3, 'Isle of Man' ),
     new State(131, 3, 'Isle of Wight' ),
     new State(132, 3, 'Kent' ), 
     new State(133, 3, 'Kincardinshire' ),
     new State(134, 3, 'Kingston Upon Hull' ),
     new State(135, 3, 'Kinross-Shire' ),
     new State(136, 3, 'Kirklees' ),
     new State(137, 3, 'Lanarkshire' ),
     new State(138, 3, 'Lancashire' ),
     new State(139, 3, 'Leicestershire ' ),
     new State(140, 3, 'Lincolnshire' ),
     new State(141, 3, 'Londonderry' ),
     new State(142, 3, 'Merseyside' ),
     new State(143, 3, 'Merthyr Tydfil' ),
     new State(144, 3, 'Mid Glamorgan' ),
     new State(145, 3, 'Mid Lothian' ),
     new State(146, 3, 'Middlesex' ),
     new State(147, 3, 'Monmouthshire' ),
     new State(148, 3, 'Moray' ),
     new State(149, 3, 'Neath & Port Talbot' ),
     new State(150, 3, 'Newport' ),
     new State(151, 3, 'Norfolk' ),
     new State(152, 3, 'North Ayrshire' ),
     new State(153, 3, 'North East Lincolnshire' ),
     new State(154, 3, 'North Lanarkshire' ),
     new State(155, 3, 'North Lincolnshire' ),
     new State(156, 3, 'North Somerset' ),
     new State(157, 3, 'North Yorkshire' ),
     new State(158, 3, 'Northamptonshire' ),
     new State(159, 3, 'Northern Ireland' ),
     new State(160, 3, 'Northumberland' ),
     new State(161, 3, 'Nottinghamshire' ),
     new State(162, 3, 'Orkney and Shetland Isles' ),
     new State(163, 3, 'Oxfordshire' ),
     new State(164, 3, 'Pembrokeshire' ),
     new State(165, 3, 'Perth and Kinross' ),
     new State(166, 3, 'Powys' ),
     new State(167, 3, 'Redcar and Cleveland' ),
     new State(168, 3, 'Renfrewshire' ),
     new State(169, 3, 'Rhonda Cynon Taff' ),
     new State(170, 3, 'Rutland' ),
     new State(171, 3, 'Scottish Borders' ),
     new State(172, 3, 'Shetland' ),
     new State(173, 3, 'Shropshire' ),
     new State(174, 3, 'Somerset' ),
     new State(175, 3, 'South Ayrshire' ),
     new State(176, 3, 'South Glamorgan' ),
     new State(177, 3, 'South Gloucesteshire' ),
     new State(178, 3, 'South Lanarkshire' ),
     new State(179, 3, 'South Yorkshire' ),
     new State(180, 3, 'Staffordshire' ),
     new State(181, 3, 'Stirling' ),
     new State(182, 3, 'Stockton On Tees' ),
     new State(183, 3, 'Suffolk' ),
     new State(184, 3, 'Surrey' ),
     new State(185, 3, 'Swansea' ),
     new State(186, 3, 'Torfaen' ),
     new State(187, 3, 'Tyne and Wear' ),
     new State(188, 3, 'Tyrone' ),
     new State(189, 3, 'Vale Of Glamorgan' ),
     new State(190, 3, 'Wales' ),
     new State(191, 3, 'Warwickshire' ),
     new State(192, 3, 'West Berkshire' ),
     new State(193, 3, 'West Dunbartonshire' ),
     new State(194, 3, 'West Glamorgan' ),
     new State(195, 3, 'West Lothian' ),
     new State(196, 3, 'West Midlands' ),
     new State(197, 3, 'West Sussex' ),
     new State(198, 3, 'West Yorkshire' ),
     new State(199, 3, 'Western Isles' ),
     new State(200, 3, 'Wiltshire' ),
     new State(201, 3, 'Wirral' ),
     new State(202, 3, 'Worcestershire' ),
     new State(203, 3, 'Wrexham' ),
     new State(204, 3, 'York' ),
     new State(205, 4, 'Central' ),
     new State(206, 4, 'Eastern' ),
     new State(207, 4, 'Northern' ),
     new State(208, 4, 'North Central' ),
     new State(209, 4, 'Sabaragamuwa' ),
     new State(210, 4, 'South' ),
     new State(211, 4, 'Uva' ),
     new State(212, 4, 'Wayamba' ),
     new State(213, 4, 'Western' ),
     new State(214, 5, 'Azad Kashmir' ),
     new State(215, 5, 'Balochistan' ),
     new State(216, 5, 'Federally Administered Tribal Areas' ),
     new State(217, 5, 'Gilgit-Baltistan' ),
     new State(218, 5, 'Islamabad' ),
     new State(219, 5, 'North West Frontier Province' ),
     new State(220, 5, 'Punjab' ),
     new State(221, 5, 'Sindh' ),
     new State(222, 6, '--' ),
     new State(223, 7, 'Federal Territory of Kuala Lumpur' ),
     new State(224, 7, 'Federal Territory of Labuan' ),
     new State(225, 7, 'Federal Territory of Putrajaya' ),
     new State(226, 7, 'Johor' ),
     new State(227, 7, 'Kedah' ),
     new State(228, 7, 'Kelantan' ),
     new State(229, 7, 'Malacca	' ),
     new State(230, 7, 'Pahang' ),
     new State(231, 7, 'Perak' ),
     new State(232, 7, 'Perlis' ),
     new State(233, 7, 'Penang' ),
     new State(234, 7, 'Sabah' ),
     new State(235, 7, 'Sarawak' ),
     new State(236, 7, 'Selangor' ),
     new State(237, 7, 'Terengganu' ),
    ];
  }
  getCurrencies()
  {

  }

}