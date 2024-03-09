'use client';
// Importations
import { fetchFilteredCustomers } from '@/app/lib/data';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions'; // Assurez-vous que le chemin d'importation est correct
import { CreateCustomer } from '@/app/ui/customers/buttons';
import CustomersTable from '@/app/ui/customers/table'; // Assurez-vous que le chemin d'importation est correct
import Search from '@/app/ui/search';
import React, { useEffect, useState } from 'react';

// Composition de la page ClientPage
const ClientPage = () => {
  const [filteredCustomers, setFilteredCustomers] = useState<
    FormattedCustomersTable[]
  >([]);

  const handleSearch = async (term: string) => {
    try {
      const customers = await fetchFilteredCustomers(term);
      setFilteredCustomers(customers);
    } catch (error) {
      console.error('Failed to fetch filtered customers:', error);
    }
  };

  useEffect(() => {
    handleSearch('');
  }, []);
  return (
    <div>
      <h1 className="text-4xl">Table des Clients</h1>
      <Search placeholder="Search for customers..." onSearch={handleSearch} />
      <CreateCustomer />
      <CustomersTable customers={filteredCustomers} />
    </div>
  );
};

// Récupération des données côté serveur

export default ClientPage;
