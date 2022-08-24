<?php

namespace App\Form;

use App\Entity\Lead;
use Doctrine\DBAL\Types\BooleanType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LeadType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => false,
            ])
            ->add('Lastname',TextType::class, [
                'label' => false,
            ])
            ->add('email', EmailType::class, [
                'label' => false,
            ])
            ->add('dob', DateType::class, [
                'label' => false,
                'widget' => 'single_text',
            ])
            ->add('zip', TextType::class, [
                'label' => false,
            ])
            ->add('address', TextType::class, [
                'label' => false,
            ])
            ->add('confirmPrivacy', CheckboxType::class, [
            ])
            ->add('ConfirmPartner', CheckboxType::class, [
            ])

            ->add('url', HiddenType::class, [
            ])
            ->add('region', HiddenType::class, [
                ])
        ;
        
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Lead::class,
        ]);
    }
}
