// Importations
import { fetchFilteredCustomers } from '@/app/lib/data';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions'; // Assurez-vous que le chemin d'importation est correct
import { CreateCustomer } from '@/app/ui/customers/buttons';
import CustomersTable from '@/app/ui/customers/table'; // Assurez-vous que le chemin d'importation est correct
import React from 'react';

interface ClientPageProps {
  customers: CustomersTableType[]; // Assurez-vous que les données récupérées sont un tableau de CustomersTableType
}

function formatCustomersData(
  customers: CustomersTableType[],
): FormattedCustomersTable[] {
  return customers.map((customer) => ({
    ...customer,
    total_pending: customer.total_pending.toString(), // Convertir total_pending en string
    total_paid: customer.total_paid.toString(), // Convertir total_paid en string
  }));
}
// Composition de la page ClientPage
const ClientPage = ({ customers }: ClientPageProps) => {
  const formattedCustomers = formatCustomersData(customers);
  return (
    <div>
      <h1>Table des Clients</h1>
      <CreateCustomer/>
      <CustomersTable customers={formattedCustomers} />
    </div>
  );
};

// Récupération des données côté serveur

export default ClientPage;
