import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';

export default function Edit({ kuis }) {
    const { data, setData, put, processing, errors } = useForm({
        pertanyaan: kuis.pertanyaan || '',
        opsi_a: kuis.opsi_a || '',
        opsi_b: kuis.opsi_b || '',
        opsi_c: kuis.opsi_c || '',
        opsi_d: kuis.opsi_d || '',
        jawaban: kuis.jawaban || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('kuis.update', kuis.id_kuis));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Kuis" />
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Pertanyaan</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium">Pertanyaan</label>
                                <input
                                    type="text"
                                    value={data.pertanyaan}
                                    onChange={e => setData('pertanyaan', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                />
                                {errors.pertanyaan && <p className="text-red-500 text-sm mt-1">{errors.pertanyaan}</p>}
                            </div>

                            {['a', 'b', 'c', 'd'].map(option => (
                                <div key={option}>
                                    <label className="block text-gray-700 font-medium">Opsi {option.toUpperCase()}</label>
                                    <input
                                        type="text"
                                        value={data[`opsi_${option}`]}
                                        onChange={e => setData(`opsi_${option}`, e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-gray-700 font-medium">Jawaban</label>
                                <input
                                    type="text"
                                    value={data.jawaban}
                                    onChange={e => setData('jawaban', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
