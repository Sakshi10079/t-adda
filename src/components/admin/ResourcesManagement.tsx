"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createAdminResource,
  deleteAdminResource,
  getAdminResources,
  updateAdminResource,
} from "@/lib/api/adminResources";
import type { Resource } from "@/lib/api/resources";
import type { ResourceUpdateRequest } from "@/lib/api/adminResources";

const statusClasses: Record<string, string> = {
  PUBLISHED: "bg-[#eef6f4] text-[#31515A]",
  DRAFT: "bg-[#f4f4f4] text-[#666666]",
};

const initialFormData: ResourceUpdateRequest = {
  title: "",
  description: "",
  type: "PDF",
  category: "GETTING_STARTED",
  fileUrl: "",
  status: "DRAFT",
};

export default function ResourcesManagement() {
  const router = useRouter();

  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [editingResourceId, setEditingResourceId] = useState<number | null>(
    null,
  );

  const [formData, setFormData] =
    useState<ResourceUpdateRequest>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadResources = async () => {
      try {
        const storedUser = localStorage.getItem("tadda_user");

        if (!storedUser) {
          router.replace("/login");
          return;
        }

        const user = JSON.parse(storedUser);

        if (!user.token) {
          router.replace("/login");
          return;
        }

        const data = await getAdminResources(user.token);

        if (!cancelled) {
          setResources(data);
        }
      } catch (error) {
        console.error("Failed to load resources:", error);

        if (!cancelled) {
          setError(
            error instanceof Error
              ? error.message
              : "Failed to load resources.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadResources();

    return () => {
      cancelled = true;
    };
  }, [router]);

  const handleAdd = () => {
    setFormData(initialFormData);
    setFormError("");
    setEditingResourceId(null);
    setIsEditFormOpen(false);
    setIsAddFormOpen(true);
  };

  const handleEdit = (resource: Resource) => {
    setEditingResourceId(resource.id);

    setFormData({
      title: resource.title,
      description: resource.description,
      type: resource.type,
      category: resource.category,
      fileUrl: resource.fileUrl,
      status: resource.status,
    });

    setFormError("");
    setIsEditFormOpen(true);
  };

  const handleFormChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleAddSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setFormError("");

      const storedUser = localStorage.getItem("tadda_user");

      if (!storedUser) {
        router.replace("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      if (!user.token) {
        router.replace("/login");
        return;
      }

      const createdResource = await createAdminResource(user.token, formData);

      setResources((currentResources) => [
        createdResource,
        ...currentResources,
      ]);

      setIsAddFormOpen(false);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to create resource:", error);

      setFormError(
        error instanceof Error ? error.message : "Failed to create resource.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editingResourceId === null) {
      return;
    }

    try {
      setIsSubmitting(true);
      setFormError("");

      const storedUser = localStorage.getItem("tadda_user");

      if (!storedUser) {
        router.replace("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      if (!user.token) {
        router.replace("/login");
        return;
      }

      const updatedResource = await updateAdminResource(
        user.token,
        editingResourceId,
        formData,
      );

      setResources((currentResources) =>
        currentResources.map((resource) =>
          resource.id === updatedResource.id ? updatedResource : resource,
        ),
      );

      setIsEditFormOpen(false);
      setEditingResourceId(null);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to update resource:", error);

      setFormError(
        error instanceof Error ? error.message : "Failed to update resource.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelAdd = () => {
    setIsAddFormOpen(false);
    setFormData(initialFormData);
    setFormError("");
  };

  const handleCancelEdit = () => {
    setIsEditFormOpen(false);
    setEditingResourceId(null);
    setFormData(initialFormData);
    setFormError("");
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this resource?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const storedUser = localStorage.getItem("tadda_user");

      if (!storedUser) {
        router.replace("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      if (!user.token) {
        router.replace("/login");
        return;
      }

      await deleteAdminResource(user.token, id);

      setResources((currentResources) =>
        currentResources.filter((resource) => resource.id !== id),
      );

      if (editingResourceId === id) {
        handleCancelEdit();
      }
    } catch (error) {
      console.error("Failed to delete resource:", error);

      alert(
        error instanceof Error ? error.message : "Failed to delete resource.",
      );
    }
  };

  if (loading) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
          <p className="text-sm text-[#102f3a]/60">Loading resources...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-8 lg:px-10">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 lg:p-8">
          <p className="text-sm font-medium text-red-700">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-8 lg:px-10">
      {/* Top Action */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#102f3a]">All Resources</h2>

          <p className="mt-1 text-sm text-[#102f3a]/50">
            Resources available to Brand Owners.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A]"
        >
          Add Resource
        </button>
      </div>

      {/* Add Form */}
      {isAddFormOpen && (
        <div className="mb-6 rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#102f3a]">Add Resource</h2>

              <p className="mt-1 text-sm text-[#102f3a]/50">
                Add a new resource for Brand Owners.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCancelAdd}
              className="text-sm font-semibold text-[#31515A] transition hover:text-black"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleAddSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              {/* Title */}
              <div>
                <label
                  htmlFor="add-title"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Title
                </label>

                <input
                  id="add-title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>

              {/* Type */}
              <div>
                <label
                  htmlFor="add-type"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Type
                </label>

                <select
                  id="add-type"
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="VIDEO">Video</option>
                  <option value="PDF">PDF</option>
                  <option value="FOLDER">Folder</option>
                  <option value="FORM">Form</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="add-category"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Category
                </label>

                <select
                  id="add-category"
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="GETTING_STARTED">Getting Started</option>

                  <option value="DESIGN_RESOURCES">Design Resources</option>

                  <option value="MARKETING">Marketing</option>

                  <option value="IMPORTANT">Important</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="add-status"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Status
                </label>

                <select
                  id="add-status"
                  name="status"
                  value={formData.status}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="PUBLISHED">Published</option>
                  <option value="DRAFT">Draft</option>
                </select>
              </div>

              {/* Resource URL */}
              <div className="md:col-span-2">
                <label
                  htmlFor="add-fileUrl"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Resource URL
                </label>

                <input
                  id="add-fileUrl"
                  name="fileUrl"
                  type="url"
                  value={formData.fileUrl}
                  onChange={handleFormChange}
                  required
                  placeholder="https://..."
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="add-description"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Description
                </label>

                <textarea
                  id="add-description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>
            </div>

            {formError && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm font-medium text-red-700">{formError}</p>
              </div>
            )}

            <div className="mt-6 flex gap-3 border-t border-black/10 pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Adding..." : "Add Resource"}
              </button>

              <button
                type="button"
                onClick={handleCancelAdd}
                disabled={isSubmitting}
                className="rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#102f3a] transition hover:bg-[#f8f9f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Form */}
      {isEditFormOpen && (
        <div className="mb-6 rounded-2xl border border-black/10 bg-white p-6 lg:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#102f3a]">
                Edit Resource
              </h2>

              <p className="mt-1 text-sm text-[#102f3a]/50">
                Update the resource information and publication status.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCancelEdit}
              className="text-sm font-semibold text-[#31515A] transition hover:text-black"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleEditSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>

              {/* Type */}
              <div>
                <label
                  htmlFor="type"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Type
                </label>

                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="VIDEO">Video</option>
                  <option value="PDF">PDF</option>
                  <option value="FOLDER">Folder</option>
                  <option value="FORM">Form</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="GETTING_STARTED">Getting Started</option>

                  <option value="DESIGN_RESOURCES">Design Resources</option>

                  <option value="MARKETING">Marketing</option>

                  <option value="IMPORTANT">Important</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                >
                  <option value="PUBLISHED">Published</option>
                  <option value="DRAFT">Draft</option>
                </select>
              </div>

              {/* Resource URL */}
              <div className="md:col-span-2">
                <label
                  htmlFor="fileUrl"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Resource URL
                </label>

                <input
                  id="fileUrl"
                  name="fileUrl"
                  type="url"
                  value={formData.fileUrl}
                  onChange={handleFormChange}
                  required
                  className="mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label
                  htmlFor="description"
                  className="text-sm font-semibold text-[#102f3a]"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm leading-6 text-[#102f3a] outline-none transition focus:border-[#31515A]"
                />
              </div>
            </div>

            {formError && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm font-medium text-red-700">{formError}</p>
              </div>
            )}

            <div className="mt-6 flex gap-3 border-t border-black/10 pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-[#102f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31515A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={isSubmitting}
                className="rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#102f3a] transition hover:bg-[#f8f9f9] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Empty State */}
      {resources.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-8 text-center">
          <p className="text-sm text-[#102f3a]/60">No resources found.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#31515A]">
                    {resource.type}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#102f3a]">
                    {resource.title}
                  </h3>
                </div>

                {/* Real status from database */}
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    statusClasses[resource.status] ||
                    "bg-[#f4f4f4] text-[#666666]"
                  }`}
                >
                  {resource.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#102f3a]/55">
                {resource.description}
              </p>

              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#31515A]/70">
                {resource.category}
              </p>

              <div className="mt-6 flex gap-4 border-t border-black/10 pt-5">
                <button
                  type="button"
                  onClick={() => handleEdit(resource)}
                  className="text-sm font-semibold text-[#31515A] transition hover:text-black"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(resource.id)}
                  className="text-sm font-semibold text-red-500 transition hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
