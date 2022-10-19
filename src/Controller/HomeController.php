<?php

namespace App\Controller;

use App\Entity\Lead;
use App\Form\LeadType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(Request $request,EntityManagerInterface $entityManagerInterface): Response
    {
        if (isset($_GET['sid'])) {
            $sid=$_GET['sid'];
        }else{
            $sid=1;
        }
        $time=time();
        $timestamp= date("Y-m-d H:i:s", $time);
        $ip=get_client_ip();
        $lead= new Lead;
        $form=$this->createForm(LeadType::class, $lead);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $name=$lead->getName();
            $lastname=$lead->getLastname();
            $email=$lead->getEmail();
            $dob=$lead->getDob();
            $dobFormat=date_format($dob, 'Y-m-d');
            $zip=$lead->getZip();
            $sex=$lead->getSex();
            $phone=$lead->getPhone();
            $address=$lead->getAddress();
            $confirmPrivacy=$lead->isConfirmPrivacy();
            $confirmPartner=$lead->isConfirmPartner();
            $url=$lead->getUrl();
            $region=$lead->getRegion();
            $entityManagerInterface->persist($lead);
            $entityManagerInterface->flush();
            // postData($ip,$name, $lastname, $email, $dobFormat,$zip,$address,$confirmPrivacy,$confirmPartner,$url,$region,$sid,$timestamp, $sex, $phone);
            return $this->redirectToRoute('app_thank_you');
        }

        return $this->render('home/index.html.twig', [
            'form'=> $form->createView(),
        ]);
    }
    #[Route('/thanks', name: 'app_thank_you')]
    public function thankYou(Request $request,EntityManagerInterface $entityManagerInterface): Response
    {

        return $this->render('home/thankYou.html.twig', [
        ]);
    }
}
function postData($ip,$name, $lastname, $email,$dobFormat,$zip,$address,$confirmPrivacy,$confirmPartner,$url,$region,$sid, $timestamp, $sex, $phone){
    $client= HttpClient::create();
    $response=$client->request('POST', 'https://renovadsdatav1.herokuapp.com/api/lead/v2', [
        
        'headers'=>[
            'x-api-token'=>'adf91a62b2e2e85fe33524685746903902cdcdfc795d8ea9c516ca3b8b3e1c71f69fe2ae2c0d2271e8da951f2fc397724bfdbe5290685cd9e4b21a28'
        ],
        'json' => [
            'ip'=>$ip,
            'email'=>$email,
            'firstname'=>$name,
            'lastname' =>$lastname,
            'dob'=>$dobFormat,
            'sid'=>$sid,
            'sex'=>$sex,
            'address1'=>$address,
            'zip'=>$zip,
            'phone'=>$phone,
            'confirmPrivacy'=>$confirmPrivacy,
            'confirmPartners'=>$confirmPartner,
            'url'=>$url,
            'region'=>$region,
            'createdAt'=>$timestamp,


        ]
    ]);
}
function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
    $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}