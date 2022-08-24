<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer, TransportInterface $transportInterface)
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $contactFormData = $form->getData();
            
            $message = (new Email())
                ->from($contactFormData['email'])
                ->to('eg.renovads@gmail.com')
                ->subject($contactFormData['subject'])
                ->text( 'Email sent via http://127.0.0.1:8000/contact
                        Expéditeur : '.$contactFormData['name'].' 
                        Email de l\'expéditeur : '.$contactFormData['email'].'
                        Message : '. $contactFormData['message'],'text/plain');
            $mailer->send($message);


            $this->addFlash('contactSuccess', "Il vostro messaggio è stato inviato. Grazie! Clicca qui per tornare alla home page.");
            
            return $this->redirectToRoute('app_contact');
        }
        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
      
    }
}
