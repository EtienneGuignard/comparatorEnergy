<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('name',TextType::class, [
            'label' => 'Nome :',
            'attr' => ['class'=>'mb-2'],
        ])
        ->add('email',EmailType::class, [
            'label' => 'Email :',
            'attr' => ['class'=>'mb-2'],
        ])
        ->add('subject',TextType::class, [
            'label' => 'Soggetto:',
            'attr' => ['class'=>'mb-2'],
            ])
        ->add('message', TextareaType::class, [
            'attr' => ['rows' => 5, 'class'=>'mb-2'],
            'label' => 'Il tuo messaggio :',
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
